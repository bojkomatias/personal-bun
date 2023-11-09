import { RadioSegment } from "./radio-segment";

export function RadiusPicker() {
  return (
    <RadioSegment
      items={[
        {
          value: "radius-none",
          node: (
            <i class="h-3.5 w-3.5 border-r-2 border-t-2 border-dashed border-current" />
          ),
        },
        {
          value: "radius-small",
          node: (
            <i class="h-3.5 w-3.5 rounded-tr-[0.25rem] border-r-2 border-t-2 border-dashed border-current" />
          ),
        },
        {
          value: "radius-normal",
          node: (
            <i class="h-3.5 w-3.5 rounded-tr-[0.4rem] border-r-2 border-t-2 border-dashed border-current" />
          ),
        },
        {
          value: "radius-large",
          node: (
            <i class="h-3.5 w-3.5 rounded-tr-[0.6rem] border-r-2 border-t-2 border-dashed border-current" />
          ),
        },
        {
          value: "radius-round",
          node: (
            <i class="h-3.5 w-3.5 rounded-tr-[0.9rem] border-r-2 border-t-2 border-dashed border-current" />
          ),
        },
      ]}
      vertical
      class="absolute bottom-0 right-24"
      size="icon"
      initialValue="localStorage.getItem('theme-radius')"
      handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme-radius'),htmx.closest(event.target,'button').value); localStorage.setItem('theme-radius', htmx.closest(event.target,'button').value);`}
    />
  );
}

export function RadiusPickerFull() {
  return (
    <div class="relative z-10 flex h-10 w-24 justify-end">
      <RadioSegment
        items={[
          { value: "radius-none", node: "None" },
          { value: "radius-small", node: "Small" },
          { value: "radius-normal", node: "Normal" },
          { value: "radius-large", node: "Large" },
          { value: "radius-round", node: "Round" },
        ]}
        size="sm"
        vertical
        initialValue="localStorage.getItem('theme-radius')"
        handleChange={`htmx.find('html').classList.replace(localStorage.getItem('theme-radius'),htmx.closest(event.target,'button').value); localStorage.setItem('theme-radius', htmx.closest(event.target,'button').value);`}
      />
    </div>
  );
}
