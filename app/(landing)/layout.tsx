import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavbar";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <TopNavBar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
