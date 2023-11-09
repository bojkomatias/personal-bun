import { dashboardNav } from "@/config/dashboard";
import { Role } from "@/db/schema/user";
import { dict } from "@/utils/dictionary";
import { UserNavigation } from "@/modules/auth/user-nav";
import { segment } from "@/components/ui/segment";
import BaseTemplate from "../template";

export const DashboardLayout = ({
  token,
  children,
}: {
  token: TokenUser;
  children: JSX.Element | JSX.Element[];
}) => (
  <BaseTemplate>
    <header class="flex flex-col items-end border-b border-border">
      <UserNavigation user={token} />
      <Tabs role={token.role} />
    </header>

    <main id="dashboard-content" class="min-h-screen pb-8">
      {children}
    </main>
  </BaseTemplate>
);

const Tabs = ({ role }: { role: Role }) => (
  <nav
    class={segment().base({
      static: true,
      style: "none",
      class: "self-start overflow-x-auto rounded-lg lg:px-8",
    })}
    hx-on:click="htmx.takeClass(event.target,'tab-indicator')"
  >
    {dashboardNav
      .filter((link) => link.clearance?.includes(role))
      .map((item) => (
        <button
          class={segment().item()}
          hx-get={item.href}
          hx-push-url="true"
          hx-target="#dashboard-content"
          hx-swap="innerHTML"
          preload
        >
          <i class={item.icon} aria-hidden="true" />
          {dict.get(item.name)}
        </button>
      ))}
    <script>
      htmx.find("button[hx-get='"+window.location.pathname+"']").classList.add('tab-indicator');
    </script>
  </nav>
);
