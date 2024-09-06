import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { ProductType } from "@/types/product"
import { toast } from "./use-toast"
interface UseLovedProductType{
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLovedProductType>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id == data.id)
        
        if (existingItem) {
            return toast({
                title: "El producto ya existe en la lista 💓"
            })
        } 

        set({
            lovedItems: [...get().lovedItems, data]
        })

        toast({
            title: "Product añadido a la lista ❤️"
        })
    },
    removeLovedItem: (id: number) => {
        set({lovedItems: [...get().lovedItems.filter((item) => item.id != id)]})
        toast({
            title: "Producto se ha eliminado de la lista 💔"
        })
    }
}),{
    name: "loved-product-storage",
    storage: createJSONStorage(() => localStorage)
}))
