import { RadiusPicker, ThemePicker } from "@/modules/settings/ui-config";
import { checkbox, input, label } from "./input";
import { card } from "./card";
import { button } from "./button";

/** This is a component to showcase */
export default function Storybook() {
  return (
    <div class="w-full space-y-8 p-8">
      <div class="w-60">
        Theme: <ThemePicker /> Radius: <RadiusPicker />
      </div>
      <div class="flex w-full justify-between gap-2">
        <div class={card({ width: "contained" }).base()}>
          <h2 class={card().title()}>Theme</h2>
          <p class={card().description()}>Customize your theme</p>
          <div class={card().content()}>
            <div>
              <label for="text" class={label()}>
                Text
              </label>
              <input id="text" name="text" type="text" class={input()} />
            </div>
            <div class="mt-3 space-x-3">
              <label for="checkbox" class={label()}>
                Check
              </label>
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                value="true"
                class={checkbox()}
              />
            </div>
            <div class="col-span-2">
              <label for="textarea" class={label()}>
                Textarea
              </label>
              <textarea id="textarea" name="textarea" class={input()} />
            </div>
            <div>
              <label for="number">Number</label>
              <input
                id="number"
                name="number"
                type="number"
                class={input({ type: "number" })}
              />
            </div>
            <div>
              <label for="select">Select</label>
              <select id="select" name="select" class={input()}>
                <optgroup label="Numbers">
                  <option value="a">1</option>
                  <option value="A">2</option>
                </optgroup>
                <optgroup label="Font">
                  <option
                    value="a"
                    class="rounded pl-2 checked:bg-accent checked:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Smaller
                  </option>
                  <option value="A" class="rounded hover:bg-accent">
                    Small
                  </option>
                </optgroup>
              </select>
            </div>
            <div>
              <label for="multiselect">Multi</label>
              <select
                id="select"
                name="multiselect"
                class={input()}
                multiple="true"
              >
                <option value="a">Smaller</option>
                <option value="A">Small</option>
              </select>
            </div>
          </div>
          <div class={card().footer({ class: "justify-end" })}>
            <button class={button({ intent: "secondary" })}>Cancel</button>
            <button class={button({ intent: "primary" })}>Save</button>
          </div>
        </div>
        <div class={card({ width: "contained" }).base({ class: "bg-muted" })}>
          <h2 class={card().title()}>Theme</h2>
          <p class={card().description()}>Customize your theme</p>
          <div class={card().content()}>
            <div>
              <label for="text" class={label()}>
                Text
              </label>
              <input id="text" name="text" type="text" class={input()} />
            </div>
            <div class="mt-3 space-x-3">
              <label for="checkbox" class={label()}>
                Check
              </label>
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                value="true"
                class={checkbox()}
              />
            </div>
            <div class="col-span-2">
              <label for="textarea" class={label()}>
                Textarea
              </label>
              <textarea id="textarea" name="textarea" class={input()} />
            </div>
            <div>
              <label for="number">Number</label>
              <input
                id="number"
                name="number"
                type="number"
                class={input({ type: "number" })}
              />
            </div>
            <div>
              <label for="select">Select</label>
              <select id="select" name="select" class={input()}>
                <optgroup label="Numbers">
                  <option value="a">1</option>
                  <option value="A">2</option>
                </optgroup>
                <optgroup label="Font">
                  <option
                    value="a"
                    class="rounded pl-2 checked:bg-accent checked:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Smaller
                  </option>
                  <option value="A" class="rounded hover:bg-accent">
                    Small
                  </option>
                </optgroup>
              </select>
            </div>
            <div>
              <label for="multiselect">Multi</label>
              <select
                id="select"
                name="multiselect"
                class={input()}
                multiple="true"
              >
                <option value="a">Smaller</option>
                <option value="A">Small</option>
              </select>
            </div>
          </div>
          <div class={card().footer({ class: "justify-end" })}>
            <button class={button({ intent: "secondary" })}>Cancel</button>
            <button class={button({ intent: "primary" })}>Save</button>
          </div>
        </div>
      </div>

      <div>
        <div class="text-4xl">This is a 4xl text</div>
        <div class="text-3xl">This is a 3xl text</div>
        <div class="text-2xl">This is a 2xl text</div>
        <div class="text-xl">This is a xl text</div>
        <div class="text-lg">This is a lg text</div>
        <div class="text-base">This is a base text</div>
        <div class="text-sm">This is a sm text</div>
        <div class="text-xs">This is a xs text</div>
      </div>
    </div>
  );
}
