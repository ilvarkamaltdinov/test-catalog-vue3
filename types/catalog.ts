type CatalogItemRatingType = {
    "rate": number,
    "count": number
}
export type CatalogItemType = {
    "id": number,
    "title": string,
    "price": number,
    "description": string
    "category": string
    "image": string,
    "rating": CatalogItemRatingType
}
export type CatalogListType = CatalogItemType[]