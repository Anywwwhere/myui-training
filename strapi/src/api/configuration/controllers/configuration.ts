import { media } from "../../../extensions/populate/element";

const { sanitize, validate } = strapi.contentAPI;

export default {
    async find(ctx) {
        const contentType = strapi.contentType('api::configuration.configuration');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const sanitizedQueryParams = await sanitize.query({
            populate: {
                buttons_default_background: { fields: ["code"] },
                buttons_default_text_color: { fields: ["code"] },
                text_default_color: { fields: ["code"] },
                reassurance_items: { populate: { icon: media } },
            },
        }, contentType, { auth: ctx.state.auth });

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents[0], contentType, { auth: ctx.state.auth });
    }
}