import React from "react";

function Footer() {
    return (
      <footer className="mt-16 border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-ink">Assist.wtf</div>
            <div>Southampton, UK</div>
            <a
              href="mailto:michael@assist.wtf"
              className="text-accent hover:underline"
            >
              [michael@assist.wtf]
            </a>
          </div>
          <div className="space-y-1 text-xs md:text-right">
            <div>© {new Date().getFullYear()} Assist.wtf. All rights reserved.</div>
            <div className="opacity-70">
              Built and hosted by Assist.wtf.
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  