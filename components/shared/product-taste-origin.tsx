import { ProductType } from "@/types/product"

type ProductProps = {
    product: ProductType
}

const ProductTasteOrigin = (props: ProductProps) => {
    const { product } = props
    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-black rounded-full  dark:bg-white dark:text-black w-fit">{product.attributes.taste}</p>
            <p className="px-2 py-1 rounded-full text-white bg-yellow-900 w-fit">{product.attributes.origin}</p>
        </div>

    )
}
export default ProductTasteOrigin