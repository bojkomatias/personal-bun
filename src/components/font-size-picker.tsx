import { RadioSegment } from "./radio-segment";

export function FontSizePicker() {
  return (
    <RadioSegment
      items={[
        {
          value: "font-smaller",
          node: <i class="i-lucide-case-sensitive h-2 w-2" />,
        },
        {
          value: "font-small",
          node: <i class="i-lucide-case-sensitive h-3 w-3" />,
        },
        {
          value: "font-regular",
          node: <i class="i-lucide-case-sensitive h-3.5 w-3.5" />,
        },
        {
          value: "font-large",
          node: <i class="i-lucide-case-sensitive h-4 w-4" />,
        },
        {
          value: "font-larger",
          node: <i class="i-lucide-case-sensitive h-5 w-5" />,
        },
      ]}
      vertical
      size="icon"
      class="absolute bottom-0 right-12"
      initialValue="localStorage.getItem('theme-font-size')"
      handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme-font-size'),htmx.closest(event.target,'button').value); localStorage.setItem('theme-font-size', htmx.closest(event.target,'button').value);`}
    />
  );
}

export function FontSizePickerFull() {
  return (
    <div class="relative z-30 flex h-10 w-24 justify-end">
      <RadioSegment
        items={[
          { value: "font-smaller", node: "Smaller" },
          { value: "font-small", node: "Small" },
          { value: "font-regular", node: "Regular" },
          { value: "font-large", node: "Large" },
          { value: "font-larger", node: "Larger" },
        ]}
        size="sm"
        vertical
        initialValue="localStorage.getItem('theme-font-size')"
        handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme-font-size'),htmx.closest(event.target,'button').value); localStorage.setItem('theme-font-size', htmx.closest(event.target,'button').value);`}
      />
    </div>
  );
}
