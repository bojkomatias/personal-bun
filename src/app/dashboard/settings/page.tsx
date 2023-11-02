import { DashboardHeading } from "@/components/dashboard/heading";
import { DashboardContent } from "@/components/dashboard/wrapper";
import Profile from "@/modules/settings/profile";
import { UIConfig } from "@/modules/settings/ui-config";
import { dict } from "@/utils/dictionary";

export default function SettingsPage({ user }: { user: TokenUser }) {
  return (
    <>
      <DashboardHeading title={dict.get("settings")} />
      <DashboardContent>
        <UIConfig />
        <Profile user={user} />
      </DashboardContent>
    </>
  );
}
