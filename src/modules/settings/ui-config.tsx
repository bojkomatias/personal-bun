import { card } from "@/components/card";
import { details } from "@/components/detail-list";
import { input } from "@/components/input";

export const UIConfig = () => (
  <div class={card().base()}>
    <h2 class={card().title()}>Theme</h2>
    <p class={card().description()}>Customize your theme</p>

    <div class={card().content({ class: "px-0" })}>
      <dl class={details().dl()}>
        <div class={details().item()}>
          <dt class={details().dt()}>Font size</dt>
          <dd class={details().dd()}>
            <span class="text-sm">Font size that suits you</span>
            <FontSizePicker />
          </dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>Theme</dt>
          <dd class={details().dd()}>
            <span class="text-sm">Pick a theme</span>
            <ThemePicker />
          </dd>
        </div>
        <div class={details().item()}>
          <dt class={details().dt()}>Rounded</dt>
          <dd class={details().dd()}>
            <span class="text-sm">How rounded do you like it</span>
            <RadiusPicker />
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export function ThemePicker() {
  return (
    <div>
      <select
        class={input()}
        _="on change set localStorage['theme'] to my value send setTheme to <html/> end
        init if localStorage['theme'] then set my value to localStorage['theme'] end"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="lemon" selected>
          Lemon
        </option>
        <option value="golden">Golden</option>
        <option value="sky">Sky</option>
        <option value="synthwave">Synthwave</option>
      </select>
    </div>
  );
}

export function RadiusPicker() {
  return (
    <div>
      <select
        class={input()}
        _="on change set localStorage['theme-radius'] to my value send setTheme to <html/> end
        init if localStorage['theme-radius'] then set my value to localStorage['theme-radius'] end"
      >
        <option value="radius-none">None</option>
        <option value="radius-small">Small</option>
        <option value="radius-normal" selected>
          Normal
        </option>
        <option value="radius-large">Large</option>
        <option value="radius-round">Round</option>
      </select>
    </div>
  );
}

function FontSizePicker() {
  return (
    <div>
      <select
        class={input()}
        _="on change set localStorage['theme-font-size'] to my value send setTheme to <html/> end
        init if localStorage['theme-font-size'] then set my value to localStorage['theme-font-size'] end"
      >
        <option value="font-smaller">Smaller</option>
        <option value="font-small">Small</option>
        <option value="font-regular" selected>
          Regular
        </option>
        <option value="font-large">Large</option>
        <option value="font-larger">Larger</option>
      </select>
    </div>
  );
}
