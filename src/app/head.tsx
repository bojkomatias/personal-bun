import { siteConfig } from "@/config/site";

export default function Head() {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* HTMX */}
      <script
        src="https://unpkg.com/htmx.org@1.9.6"
        integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
        crossorigin="anonymous"
      />

      {/* Preload Ext */}
      <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
      {/* Head Extension */}
      <script src="https://unpkg.com/htmx.org/dist/ext/head-support.js"></script>
      {/* Target Response Ext */}
      <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
      {/* htmx configuration */}
      <script>htmx.config.globalViewTransitions = true;</script>

      {/* Hyperscript */}
      <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
      {/* TailwindCSS */}
      <link href="/styles.css" rel="preload stylesheet" />
      {/* Fonts */}
      <link
        href="https://api.fontshare.com/v2/css?f[]=red-hat-display@2,1&display=swap"
        rel="stylesheet"
      />
      {/* Favicon + Title */}
      <link rel="icon" href="/public/vercel.svg" />
      <title>{siteConfig.name}</title>
    </head>
  );
}
