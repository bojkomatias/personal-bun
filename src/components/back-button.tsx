import { dict } from "@/utils/dictionary";
import { button } from "./ui/button";

export const BackButton = () => (
  <button
    hx-on:click="history.back()"
    class={button({ intent: "ghost", size: "sm", class: "my-2" })}
  >
    <i class="i-lucide-chevron-left" />
    {dict.get("back")}
  </button>
);
