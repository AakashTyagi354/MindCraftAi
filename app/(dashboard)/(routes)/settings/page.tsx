import SubButton from "@/components/SubButton";
import Heading from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

export default async function page() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        desc="Manage account settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a substribed plane"
            : "You are currently on a free plane"}
        </div>
        <SubButton isPro={isPro} />
      </div>
    </div>
  );
}
