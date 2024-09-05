export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: string;
        decription: string;
        active: boolean;
        isFeatured: boolean;
        taste: string;
        origin: string;
        price: number;
        images: {
            data: {
                id: number;
                attributes: {
                    url: string;
                };
            }[];
        };
    
    categoty: {
        data: {
            attributes: {
                slug: string;
                categoryName: string;
            }
        }
    }
};
}
