import { button } from "./ui/button";
import { segment } from "./ui/segment";

type RadioItem = {
  value: string;
  node: JSX.Element;
};
type Radio = {
  items: RadioItem[];
  id: string;
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
      class={segment().base({
        vertical: props.vertical,
        static: props.static,
        class: props.class,
      })}
      _={segment()._value(props.id)}
    >
      {props.items.map(({ value, node }) => (
        <button
          role="radio"
          value={value}
          class={segment().item({
            size: props.size,
            intent: "ghost",
          })}
          aria-checked="false"
        >
          {node}
        </button>
      ))}
    </div>
  );
}
