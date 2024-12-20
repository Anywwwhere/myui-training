
const { sanitize, validate } = strapi.contentAPI;

export default {
    async find(ctx) {
        const contentType = strapi.contentType('api::footer.footer');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const sanitizedQueryParams = await sanitize.query({
            fields: ['copyrights'],
            populate: {
                links_groups: { populate: { pages: { fields: ['title', 'slug'] } } },
                socials: true
            },
        }, contentType, { auth: ctx.state.auth });

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents[0], contentType, { auth: ctx.state.auth });
    }
}