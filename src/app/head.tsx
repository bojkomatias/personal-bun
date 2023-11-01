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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Favicon + Title */}
      <link rel="icon" href="/public/sigma-b.svg" />
      <title>{siteConfig.name}</title>
    </head>
  );
}
