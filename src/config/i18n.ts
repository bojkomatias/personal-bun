import { Elysia } from "elysia";
import { i18next } from "elysia-i18next";

export const i18n = new Elysia({ name: "i18n" }).use(
  i18next({
    initOptions: {
      resources: {
        en: {
          translation: {
            greeting: "Hi",
          },
        },
        es: {
          translation: {
            greeting: "Hola",
          },
        },
      },
    },
  }),
);
