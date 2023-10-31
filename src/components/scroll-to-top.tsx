import { button } from "./ui/button";

export function ScrollToTop() {
  return (
    <>
      <div
        class="absolute top-1/2"
        _="on intersection(intersecting) having threshold 1
      if intersecting hide #scroll-to-top 
      else show #scroll-to-top"
      />
      <button
        id="scroll-to-top"
        _="on click go to top of <body/> smoothly"
        class={button({
          size: "icon",
          intent: "outline",
          class: "fixed bottom-1/4 right-12 rounded-full",
        })}
      >
        <i class="i-lucide-arrow-up h-4 w-4" />
      </button>
    </>
  );
}
