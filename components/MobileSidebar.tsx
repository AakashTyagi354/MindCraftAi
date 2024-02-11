"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface MobilesidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export default function MobileSidebar({
  apiLimitCount = 0,
  isPro = false,
}: MobilesidebarProps) {
  const [usModulted, setIsModunted] = useState(false);
  useEffect(() => {
    setIsModunted(true);
  }, []);
  if (!usModulted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
}
