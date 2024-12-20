import { button, media } from "../../../extensions/populate/element";

const { sanitize, validate } = strapi.contentAPI;

const body = {
    on: {
        'block.hero': {
            populate: { images: { populate: { media } }, tag: true, button }
        },
        'block.information-cards': {
            populate: { info_cards: { populate: { image: media, button } } }
        },
        'block.services': { populate: { services: { populate: { image: media, button } } } },
        'block.cta-banner': {
            populate: { image: media, button }
        },
        'block.testimonials': true,
        'block.faq-list': {
            populate: { faqs: { fields: ["question", "answer"] }, button }
        }
    },
}

export default {
    async findHome(ctx) {
        const contentType = strapi.contentType('api::page.page');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const sanitizedQueryParams = await sanitize.query({
            populate: { body },
            filters: {
                isHomepage: {
                    $eq: true,
                },
            },
            status: ctx.params.status === 'draft' ? 'draft' : 'published',
        }, contentType, { auth: ctx.state.auth });

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents[0], contentType, { auth: ctx.state.auth });
    },
    async find(ctx) {
        const contentType = strapi.contentType('api::page.page');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const sanitizedQueryParams = await sanitize.query({
            populate: '*',
            filters: {
                isHomepage: {
                    $eq: false,
                },
            },
            status: ctx.params.status === 'draft' ? 'draft' : 'published',
        }, contentType, { auth: ctx.state.auth });

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents, contentType, { auth: ctx.state.auth });
    },
    async findOne(ctx) {
        const contentType = strapi.contentType('api::page.page');

        await validate.query(ctx.query, contentType, { auth: ctx.state.auth });

        const slug = `/${ctx.params['0'].split('/').splice(2).join('/')}`

        const sanitizedQueryParams = await sanitize.query({
            populate: { body },
            filters: {
                slug,
                isHomepage: {
                    $eq: false,
                },
            },
            status: ctx.params.status === 'draft' ? 'draft' : 'published',
        }, contentType, { auth: ctx.state.auth });

        console.log(sanitizedQueryParams)

        const documents = await strapi.documents(contentType.uid).findMany(sanitizedQueryParams);

        return await sanitize.output(documents[0], contentType, { auth: ctx.state.auth });
    }
}