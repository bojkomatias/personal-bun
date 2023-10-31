import { button } from "./ui/button";

export function ScrollToTop() {
  return (
    <>
      <div
        _="on intersection(intersecting) having threshold 1
      if intersecting hide #scroll-to-top 
      else show #scroll-to-top"
      />
      <button
        id="scroll-to-top"
        _="on click go to top of <body/> smoothly"
        class={button({
          size: "icon",
          intent: "muted",
          class: "fixed inset-y-2/3 right-10 animate-pulse hover:animate-none",
        })}
      >
        <i class="i-lucide-arrow-up h-4 w-4" />
      </button>
    </>
  );
}
