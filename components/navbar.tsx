"use client"

import { Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import ItemsMenuMobile from "./items-menu-mobile"
import ToggleTheme from "./toggle-theme"
const Navbar = () => {
    const router = useRouter()
    return(
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max">
            <h1 className="text-3xl "onClick={() => router.push("/")}>Caffe
                <span className="font-bold ">Natura</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex ">
                <MenuList />

            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart  strokeWidth="1" className="cursor-pointer " onClick={() => router.push("/cart")}/>
                <Heart className="cursor-pointer "  onClick={() => router.push("/love-products")}/>
                <User strokeWidth={1} className="cursor-pointer"/>
                <ToggleTheme />

            </div>
        </div>
        
    )
}
export default Navbar;