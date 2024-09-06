/* eslint-disable @next/next/no-img-element */
import ProductImageMiniature from '@/components/shared/product-image-miniature'
import ProductTasteOrigin from '@/components/shared/product-taste-origin'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useLovedProducts } from '@/hooks/use-loved-products'
import { formatPrice } from '@/lib/formatPrice'
import { cn } from '@/lib/utils'
import { ProductType } from '@/types/product'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface LovedtemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedtemProductProps) => {
    const {product} = props
    const router = useRouter()
    const {removeLovedItem} = useLovedProducts()
    const {addItem} = useCart()
  return (
    <li className='flex p-6 border-b'>
        <ProductImageMiniature product={product} />
        <div className='flex justify-between flex-1 px-6'>
            <div>
                <div>
                    <h2 className='text-lg font-bold'>{product.attributes.productName}</h2>
                    <p className='font-bold'>{formatPrice(product.attributes.price)}</p>
                    <ProductTasteOrigin product={product} />
                    <Button className='mt-5 rounded-full'> Añadir al carrito</Button>
                </div>
                
            </div>
            <div>
                        <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                            <X size={20} onClick={() => removeLovedItem(product.id)}/>
                        </button>
                    </div>
        </div>
    </li>
  )
}

export default LovedItemProduct