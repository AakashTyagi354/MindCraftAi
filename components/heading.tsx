import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Headingprops {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}
export default function Heading({
  title,
  desc,
  icon: Icon,
  iconColor,
  bgColor,
}: Headingprops) {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8 ">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </>
  );
}
