
import { Menu } from "lucide-react"
import { Popover,PopoverContent, PopoverTrigger  } from "./ui/popover"
import Link from "next/link"


const ItemsMenuMobile = () => {
  return (
  <div>
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/categorias/cafe-molido" className="block">Cafe molido</Link>
            <Link href="/categorias/cafe-grano"className="block">Cafe en grano</Link>
            <Link href="/categorias/cafe-capsula"className="block">Cafe en capsula</Link>
        </PopoverContent>
    </Popover>
  </div>
)
}

export default ItemsMenuMobile