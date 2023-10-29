import { RadioSegment } from "./radio-segment";
const _ =
  "on mutation of @value set localStorage['theme'] to my value send setTheme to <html/> end init if localStorage['theme'] then set my value to localStorage['theme'] end";

export function ThemePicker() {
  return (
    <>
      <input id="theme-picker" type="hidden" _={_} />
      <RadioSegment
        items={[
          {
            value: "system",
            node: <i class="i-lucide-monitor" />,
          },
          { value: "light", node: <i class="i-lucide-sun" /> },
          { value: "dark", node: <i class="i-lucide-moon" /> },
          { value: "acid", node: <i class="i-lucide-flask-conical" /> },
          { value: "green", node: <i class="i-lucide-leafy-green" /> },
          { value: "warm", node: <i class="i-lucide-lightbulb" /> },
          { value: "synthwave", node: <i class="i-lucide-boom-box" /> },
          { value: "modern", node: <i class="i-lucide-rocket" /> },
        ]}
        vertical
        size="icon"
        class="absolute bottom-0 right-0"
        id="theme-picker"
      />
    </>
  );
}

export function ThemePickerFull() {
  return (
    <div class="relative flex h-10 w-24 justify-end hover:z-10">
      <input id="theme-picker-full" type="hidden" _={_} />
      <RadioSegment
        items={[
          {
            value: "system",
            node: "System",
          },
          { value: "light", node: "Light" },
          {
            value: "dark",
            node: "Dark",
          },
          { value: "acid", node: "Acid" },
          { value: "green", node: "Green" },
          { value: "warm", node: "Warm" },
          { value: "synthwave", node: "Synthwave" },
          { value: "modern", node: "Modern" },
        ]}
        size="base"
        vertical
        id="theme-picker-full"
      />
    </div>
  );
}
