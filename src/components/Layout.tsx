import { ReactNode } from "react";
import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
