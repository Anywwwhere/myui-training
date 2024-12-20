
const { sanitize, validate } = strapi.contentAPI;

export default {
    async find(ctx) {
        const contentType = strapi.contentType('api::header.header');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const sanitizedQueryParams = await sanitize.query({
            fields: [],
            populate: {
                menu_items: { populate: { page: { fields: ["title", 'slug'] } } }
            },
        }, contentType, { auth: ctx.state.auth });

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents[0], contentType, { auth: ctx.state.auth });
    }
}