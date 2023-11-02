import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { input, label } from "@/components/ui/input";

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
          <label for="read" class={label()}>
            Read time
          </label>
          <input
            type="text"
            id="read"
            name="read"
            placeholder="Read time"
            class={input()}
          />
          <label for="content" class={label()}>
            Blog Post
          </label>
          <textarea
            id="content"
            name="content"
            rows="8"
            class={input({ class: "font-mono sm:text-base" })}
            placeholder="Write down some markdown ..."
          />
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
