/* eslint-disable @next/next/no-img-element */
import { ProductType } from '@/types/product'
import { useRouter } from 'next/navigation'


interface ProductImageMiniatureProps {
    product: ProductType
}

const ProductImageMiniature= (props: ProductImageMiniatureProps) => {
    const { product} = props
    const route = useRouter()
  return (
    <div onClick={() => route.push(`/product/${product.attributes.slug}`)} className="cursor-pointer">
            <img src={product.attributes.images.data[0].attributes.url} alt="Product" className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
        </div>
  )
}

export default ProductImageMiniature