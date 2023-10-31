import Head from "./head";

export default function BaseTemplate({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <html
      lang="en"
      _="init send setTheme to me end
        on setTheme set @class to (localStorage.theme + ' ' + localStorage['theme-radius'] + ' ' + localStorage['theme-font-size'])"
    >
      <Head />
      <body
        class="w-screen overflow-x-hidden bg-background text-foreground subpixel-antialiased"
        hx-boost="true"
        hx-ext="response-targets, preload, head-support"
        _="on click send close to .dropdown end
    on htmx:afterOnLoad tell <button/> remove @disabled end"
        // Handles click outside for all menus
      >
        {/* Notifications fall all here! */}
        <div id="notification" />
        <div id="page-content" class="min-h-[100svh]">
          {children}
        </div>
      </body>
    </html>
  );
}
