export type CategoryType ={
    id: number;
    attributes: {
        categoriName: string;
        slug: string;
        mainImage: {
            data: {
            attributes: {
                url: string;
            }
        }
        }
    }

}