import { button } from "./button";

export const LoaderButton = (props: JSX.HtmlButtonTag) => (
  <button
    class={
      props.class ??
      button({
        intent: "primary",
      })
    }
    _="on click wait 0.05s then add @disabled"
  >
    <i class="htmx-indicator i-lucide-loader-2 animate-spin text-inherit" />
    {props.children}
  </button>
);
