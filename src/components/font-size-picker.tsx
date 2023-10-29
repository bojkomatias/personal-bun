import { RadioSegment } from "./radio-segment";

const _ =
  "on mutation of @value set localStorage['theme-font-size'] to my value send setTheme to <html/> end init if localStorage['theme-font-size'] then set my value to localStorage['theme-font-size'] else set my value to 'font-regular' end";

export function FontSizePicker() {
  return (
    <>
      <input type="hidden" id="font-size-picker" _={_} />
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
        id="font-size-picker"
      />
    </>
  );
}

export function FontSizePickerFull() {
  return (
    <div class="relative flex h-10 w-24 justify-end hover:z-10">
      <input type="hidden" id="font-size-picker-full" _={_} />
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
        id="font-size-picker-full"
      />
    </div>
  );
}
