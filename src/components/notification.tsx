import { button } from "./ui/button";

export const Notification = ({
  title,
  description,
  icon,
  isError,
}: {
  title: string;
  description: string;
  icon?: string;
  isError?: boolean;
}) => {
  return (
    <div
      id="notification"
      hx-swap-oob="true"
      class="fixed bottom-2 left-2 right-2 z-30 overflow-hidden rounded-lg bg-muted shadow ring-1 ring-ring duration-200 animate-in fade-in slide-in-from-bottom sm:bottom-8 sm:left-auto sm:right-4 sm:w-96"
    >
      <script>
        {`
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          closeNotification()
        }, 3000);
        `}
      </script>
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <i
              class={
                icon
                  ? icon
                  : isError
                  ? "i-lucide-x-circle h-6 w-6 text-red-600"
                  : "i-lucide-check-circle h-6 w-6 text-emerald-600"
              }
            />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium">{title}</p>
            <p class="mt-1 text-sm font-light text-muted-foreground">
              {description}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              class={button({ size: "icon-sm" })}
              hx-on:click="closeNotification()"
            >
              <span class="sr-only">Close</span>
              <i class="i-lucide-x text-muted-foreground group-hover:text-inherit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
