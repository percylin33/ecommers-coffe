export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        taste: string;
        origin:string;
        price:number;
        images:{
            id:number;
            attributes: {
                url:string;
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
}