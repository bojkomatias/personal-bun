import { RadioSegment } from "./radio-segment";

export function ThemePicker() {
  return (
    <RadioSegment
      items={[
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
      initialValue="localStorage.getItem('theme')"
      handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme'),htmx.closest(event.target,'button').value); localStorage.setItem('theme', htmx.closest(event.target,'button').value);`}
    />
  );
}

export function ThemePickerFull() {
  return (
    <div class="relative z-20 flex h-10 w-24 justify-end">
      <RadioSegment
        items={[
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
        size="sm"
        vertical
        initialValue="localStorage.getItem('theme')"
        handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme'),htmx.closest(event.target,'button').value); localStorage.setItem('theme', htmx.closest(event.target,'button').value);`}
      />
    </div>
  );
}
