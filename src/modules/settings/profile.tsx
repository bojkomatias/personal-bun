import { InsertUser, SelectUser } from "@/db/schema/user";
import { details } from "@/components/ui/detail-list";
import { input } from "@/components/ui/input";
import { dict } from "@/utils/dictionary";
import { card } from "@/components/ui/card";
import { button } from "@/components/ui/button";

const Profile = ({ user }: { user: SelectUser }) => (
  <div class={card().base()}>
    <h3 class={card().title()}>Perfil</h3>
    <p class={card().description()}>
      Datos de tu perfil, tené en cuenta que algunos datos son públicos
    </p>

    <div class={card().content({ class: "px-0" })}>
      <dl class={details().dl()}>
        <div class={details().item()}>
          <dt class={details().dt()}>{dict.get("id")}</dt>
          <dd class={details().dd()}>{user.id}</dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>{dict.get("name")}</dt>
          <dd class={details().dd()}>
            <Profile.Attribute
              id={user.id}
              attribute="name"
              value={user.name}
            />
          </dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>{dict.get("email")}</dt>
          <dd class={details().dd()}>{user.email}</dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>{dict.get("role")}</dt>
          <dd class="text-xs uppercase">{user.role}</dd>
        </div>
      </dl>
    </div>
  </div>
);

Profile.Attribute = ({
  id,
  attribute,
  value,
}: {
  id: string | number;
  attribute: keyof InsertUser;
  value: InsertUser[typeof attribute];
}) => {
  return (
    <>
      <span safe>{value}</span>
      <button
        hx-get={`/dashboard/settings/${id}/${attribute}/edit?value=${value}`}
        hx-target="closest dd"
        hx-swap="innerHTML"
        preload
        class={button({ size: "xs" })}
      >
        {dict.get("update")}
      </button>
    </>
  );
};

Profile.AttributeEdit = ({
  id,
  attribute,
  value,
}: {
  id: string | number;
  attribute: keyof InsertUser;
  value: InsertUser[typeof attribute];
}) => {
  return (
    <form
      hx-patch={`/dashboard/settings/${id}`}
      hx-target="this"
      hx-swap="outerHTML"
      class="mt-4 flex h-8 w-full items-center gap-x-4 sm:mt-0"
    >
      <input
        name={attribute}
        value={value?.toString()}
        type="text"
        class={input()}
      />
      <span class="flex-grow" />
      <span class="flex gap-2">
        <button class={button({ intent: "primary", size: "xs" })}>
          {dict.get("save")}
        </button>
        <button
          hx-get={`/dashboard/settings/${id}/${attribute}?value=${value}`}
          type="reset"
          class={button({ size: "xs" })}
        >
          {dict.get("cancel")}
        </button>
      </span>
    </form>
  );
};
export default Profile;
