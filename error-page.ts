import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Certif Auto — Automatisez vos démarches SIV",
      },
      {
        name: "description",
        content:
          "Automatisez vos démarches SIV, réduisez la saisie manuelle et traitez vos dossiers plus rapidement.",
      },
    ],
    links: [{ rel: "icon", href: "/favicon.png" }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
