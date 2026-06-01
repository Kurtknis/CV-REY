'use client';

import React, { Children, cloneElement, forwardRef, isValidElement, useCallback, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import usePerformanceProfile from '@/lib/usePerformanceProfile';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card-swap-card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const { animationScale, isMobile, isTablet, prefersReducedMotion } = usePerformanceProfile();
  const motionScale = animationScale || 0;
  const effectiveCardDistance = isMobile ? cardDistance * 0.4 : isTablet ? cardDistance * 0.7 : cardDistance;
  const effectiveVerticalDistance = isMobile ? verticalDistance * 0.4 : isTablet ? verticalDistance * 0.7 : verticalDistance;
  const effectiveSkewAmount = isMobile ? skewAmount * 0.4 : isTablet ? skewAmount * 0.7 : skewAmount;
  const effectiveDelay = motionScale > 0 ? Math.round(delay / motionScale) : delay;

  const config = useMemo(() => (
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2 * Math.max(motionScale, 0.55),
          durMove: 2 * Math.max(motionScale, 0.55),
          durReturn: 2 * Math.max(motionScale, 0.55),
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8 * Math.max(motionScale, 0.55),
          durMove: 0.8 * Math.max(motionScale, 0.55),
          durReturn: 0.8 * Math.max(motionScale, 0.55),
          promoteOverlap: 0.45,
          returnDelay: 0.2
        }
  ), [easing, motionScale]);

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const swapRef = useRef(null);
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);
  const visibleRef = useRef(true);
  const pageVisibleRef = useRef(true);

  const swap = useCallback(() => {
    if (order.current.length < 2 || prefersReducedMotion || motionScale === 0 || !visibleRef.current || !pageVisibleRef.current) return;

    const total = refs.length;
    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) return;

    tlRef.current?.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: '+=' + (effectiveVerticalDistance * 2 + 100),
      rotateZ: -8,
      opacity: 0.5,
      duration: config.durDrop,
      ease: config.ease,
      zIndex: 0,
      lazy: true,
      overwrite: 'auto'
    });

    rest.forEach((idx, pos) => {
      const slot = makeSlot(pos, effectiveCardDistance, effectiveVerticalDistance, total);
      tl.to(
        refs[idx].current,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          zIndex: slot.zIndex,
          duration: config.durMove,
          ease: config.ease,
          lazy: true,
          overwrite: 'auto'
        },
        `-=${config.durMove * config.promoteOverlap}`
      );
    });

    const backSlot = makeSlot(total - 1, effectiveCardDistance, effectiveVerticalDistance, total);
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        zIndex: backSlot.zIndex,
        rotateZ: 0,
        opacity: 1,
        duration: config.durReturn,
        ease: config.ease,
        delay: config.returnDelay,
        lazy: true,
        overwrite: 'auto'
      },
      `-=${config.durReturn * 0.5}`
    );

    order.current = [...rest, front];
  }, [refs, prefersReducedMotion, motionScale, effectiveVerticalDistance, config, effectiveCardDistance]);

  useEffect(() => {
    const total = refs.length;
    order.current = Array.from({ length: childArr.length }, (_, i) => i);
    refs.forEach((r, i) => r.current && placeNow(r.current, makeSlot(i, effectiveCardDistance, effectiveVerticalDistance, total), effectiveSkewAmount));
    swapRef.current = swap;

    const start = () => {
      if (prefersReducedMotion || motionScale === 0 || !visibleRef.current || !pageVisibleRef.current) return;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => swapRef.current?.(), effectiveDelay);
    };
    const stop = () => clearInterval(intervalRef.current);
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting) start();
      else stop();
    }, { rootMargin: '160px' });
    const handleVisibility = () => {
      pageVisibleRef.current = document.visibilityState === 'visible';
      if (pageVisibleRef.current) start();
      else stop();
    };

    if (container.current) observer.observe(container.current);
    document.addEventListener('visibilitychange', handleVisibility, { passive: true });
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      tlRef.current?.kill();
    };
  }, [
    refs, childArr.length, effectiveCardDistance, effectiveVerticalDistance,
    effectiveDelay, effectiveSkewAmount, swap, prefersReducedMotion, motionScale
  ]);

  // Pause on hover
  useEffect(() => {
    if (!pauseOnHover || !container.current) return;
    const el = container.current;
    const pause = () => clearInterval(intervalRef.current);
    const resume = () => {
      if (prefersReducedMotion || motionScale === 0 || !visibleRef.current || !pageVisibleRef.current) return;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => swapRef.current?.(), effectiveDelay);
    };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    return () => {
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, [pauseOnHover, effectiveDelay, prefersReducedMotion, motionScale]);

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {childArr.map((child, i) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, {
          ref: refs[i],
          key: i,
          onClick: () => onCardClick?.(i),
          style: { ...child.props.style, width, height, position: 'absolute', top: '50%', left: '50%' }
        });
      })}
    </div>
  );
};

export default React.memo(CardSwap);
