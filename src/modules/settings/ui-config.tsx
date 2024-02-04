import { card } from "@/components/ui/card";
import { details } from "@/components/ui/detail-list";

import { RadiusPickerFull } from "@/components/radius-picker";
import { ThemePickerFull } from "@/components/theme-picker";

export const UIConfig = () => (
  <div class={card().base()}>
    <h3 class={card().title()}>Theme</h3>
    <p class={card().description()}>Customize your theme</p>

    <div class={card().content({ class: "px-0" })}>
      <dl class={details().dl()}>
        <div class={details().item()}>
          <dt class={details().dt()}>Theme</dt>
          <dd class={details().dd()}>
            <span class="text-sm">Pick a theme</span>
            <ThemePickerFull />
          </dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>Rounded</dt>
          <dd class={details().dd()}>
            <span class="text-sm">How rounded do you like it</span>
            <RadiusPickerFull />
          </dd>
        </div>
      </dl>
    </div>
  </div>
);
