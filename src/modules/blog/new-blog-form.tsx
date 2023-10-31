import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { input, label } from "@/components/ui/input";

const str = "sape sape";

export function NewBlogForm() {
  return (
    <div class={card().base()}>
      <h3 class={card().title()}>New Post</h3>
      <div class={card().description()}>Create and publish a new blog post</div>
      <form>
        <div class={card().content()}>
          <label for="title" class={label()}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="A title"
            class={input()}
          />
          <label class={label()}>Content</label>
          <span
            contenteditable="true"
            class={input({
              class:
                "min-h-[6rem] before:text-muted-foreground/50 empty:before:content-['Write_some_markdown_...']",
            })}
            role="textbox"
            _="on blur set @value of #content to my innerText"
          />
          <input id="content" name="content" type="hidden" />
        </div>
        <div class={card().footer({ class: "justify-end" })}>
          <button
            id="save"
            type="submit"
            class={button({ intent: "primary" })}
            hx-post="/dashboard/blog"
            hx-swap="none"
          >
            Save
          </button>
        </div>
      </form>
      <div id="preview"></div>
    </div>
  );
}
