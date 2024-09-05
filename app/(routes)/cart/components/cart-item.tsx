import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface CartItemProps{
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const {product} = props
    const route = useRouter()
    const {removeItem} = useCart()
  return (
    <li className="flex py-6 border-b">
        <div onClick={() => route.push(`/product/${product.attributes.slug}`)} className="cursor-pointer">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`} alt="Product" className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
        </div>
        <div className="flex justify-between flex-1 px-6">
            <div>
                <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                <p className="font-bold">{formatPrice(product.attributes.price)}</p>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-white bg-black rounded-full  dark:bg-white 
                    dark:text-black w-fit">{product.attributes.taste}</p>
                    <p className="px-2 py-1 rounded-full text-white bg-yellow-900 w-fit">
                        {product.attributes.origin}</p>

                </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20}  onClick={() => removeItem(product.id)} />
                        
                    </button>
                
            </div>
        </div>

    </li>
  )
}

export default CartItem