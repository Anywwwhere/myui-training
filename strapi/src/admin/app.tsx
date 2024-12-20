import type { StrapiApp } from "@strapi/strapi/admin"

export default {
  config: {
    locales: ["en", "fr"],
  },
  bootstrap(app: StrapiApp) {
    console.log(app)
  },
}
