import { RadioSegment } from "./radio-segment";

const _ =
  "on mutation of @value set localStorage['theme-radius'] to my value send setTheme to <html/> end init if localStorage['theme-radius'] then set my value to localStorage['theme-radius'] else set my value to 'radius-small' end";

export function RadiusPicker() {
  return (
    <>
      <input type="hidden" id="radius-picker" _={_} />
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
        id="radius-picker"
        size="icon"
      />
    </>
  );
}

export function RadiusPickerFull() {
  return (
    <div class="relative flex h-10 w-24 justify-end hover:z-10">
      <input type="hidden" name="" id="radius-picker-full" _={_} />
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
        id="radius-picker-full"
      />
    </div>
  );
}
