export interface StrapiMedia {
    id: number
    documentId: string
    name: string
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string,
    provider: string
    provider_metadata: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface StrapiConfigColor {
    "id": number
    "documentId": string
    "code": string
}

export interface StrapiPage {
    id: number
    documentId: string
    title: string
    slug: string
    meta_title: string
    meta_description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    isHomepage: boolean
}

export interface StrapiButtonLink {
    id: number
    name: string
    custom_link: string
    page: StrapiPage
    "background_color": StrapiConfigColor,
    "text_color": StrapiConfigColor,
}