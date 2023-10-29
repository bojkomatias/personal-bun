import { dashboardNav } from "@/config/dashboard";
import { Role } from "@/db/schema/user";
import { dict } from "@/utils/dictionary";
import { Hover } from "../../components/hover-transition";
import { UserNavigation } from "@/modules/auth/user-nav";
import { JWTPayloadSpec } from "@elysiajs/jwt";
import { button } from "@/components/ui/button";
import { segment } from "@/components/ui/segment";
import BaseTemplate from "../template";

type User = {
  id: string;
  name: string;
  image: string | null;
  email: string;
  role: "client" | "admin";
} & JWTPayloadSpec;

export const DashboardLayout = ({
  token,
  children,
}: {
  token: User;
  children?: any;
}) => (
  <BaseTemplate>
    <header class="flex flex-col items-end border-b border-border pt-2">
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
      style: "underline",
      class: "self-start overflow-x-auto rounded-lg lg:px-8",
    })}
    _={segment()._indicator()}
  >
    {dashboardNav
      .filter((link) => link.clearance?.includes(role))
      .map((item) => (
        <button
          class={segment().item({ style: "underline" })}
          hx-get={item.href}
          hx-push-url="true"
          hx-target="#dashboard-content"
          hx-swap="innerHTML"
          _="init if window.location.pathname contains @hx-get then add @aria-checked='true' end"
        >
          <i class={item.icon} aria-hidden="true" />
          {dict.get(item.name)}
        </button>
      ))}
  </nav>
);
