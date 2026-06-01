import { memo } from "react";

function Footer() {
  return (
    <footer className="relative border-t border-white/8 px-5 py-10">
      <div className="container-max flex flex-col gap-4 text-sm text-silver-dim md:flex-row md:items-center md:justify-between">
        <p>Designed & Engineered by Muhammad Raihan Akbar</p>
        <p className="font-mono uppercase tracking-[0.12em]">Fullstack Engineer / ERD / Databases / APIs / Technical SEO</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
