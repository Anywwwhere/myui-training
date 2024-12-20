/**
 * page router
 */
export default {
    routes: [
        {
            method: "GET",
            path: "/pages/home",
            handler: "page.findHome",
        },
        {
            method: "GET",
            path: "/pages",
            handler: "page.find",
        },
        {
            method: "GET",
            path: "/pages/:path",
            handler: "page.findOne",
        },
        {
            method: "GET",
            path: "/pages/:sub_1/:sub_2",
            handler: "page.findOne",
        },
        {
            method: "GET",
            path: "/pages/:sub_1/:sub_2/:sub_3",
            handler: "page.findOne",
        },
        {
            method: "GET",
            path: "/pages/:sub_1/:sub_2/:sub_3/:sub_4",
            handler: "page.findOne",
        }
    ],
};

