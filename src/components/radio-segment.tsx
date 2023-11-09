import { button } from "./ui/button";
import { ariaExpand, ariaSelect } from "./ui/event-handlers";
import { segment } from "./ui/segment";

type RadioItem = {
  value: string;
  node: JSX.Element;
};
type Radio = {
  items: RadioItem[];
  initialValue?: string;
  handleChange?: string;
  class?: string;
  size: keyof typeof button.variants.size;
  vertical?: true;
  static?: true;
};
/**
 * If its vertical wrap in a relative!

 */
export function RadioSegment(props: Radio) {
  return (
    <div
      role="radiogroup"
      aria-haspopup="true"
      class={segment().base({
        vertical: props.vertical,
        static: props.static,
        class: props.class,
      })}
      hx-on:click={ariaExpand(ariaSelect("bg-indicator", props.handleChange))}
    >
      {props.items.map(({ value, node }) => (
        <button
          role="radio"
          value={value}
          class={segment().item({
            size: props.size,
            intent: "ghost",
          })}
        >
          {node}
        </button>
      ))}
      <script>
        var x = {props.initialValue};
        htmx.takeClass(htmx.find("button[value='"+x+"']"), 'bg-indicator');
      </script>
    </div>
  );
}
