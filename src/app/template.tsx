import Head from "./head";

export default function BaseTemplate({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="en">
      <Head />
      <body
        class="w-screen overflow-x-hidden bg-background text-foreground subpixel-antialiased"
        hx-boost="true"
        hx-ext="response-targets, preload, head-support"
        hx-on:click="document.querySelectorAll(`[aria-haspopup='true']`).forEach(e => e.removeAttribute('aria-expanded'));"
        // Handles click outside for all menus
      >
        {/* Notifications fall all here! */}
        <div id="notification" />
        <div id="overlay" />
        <div id="page-content" class="min-h-[100svh] pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
