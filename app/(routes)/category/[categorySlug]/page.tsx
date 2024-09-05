"use client"
import { useGertCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import FilterControsCategory from "@/app/(routes)/category/[categorySlug]/components/filters-contros-category";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import SkeletonShema from "@/components/skeletonShema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";


export default function Page() {
  const params = useParams()
  const { categorySlug } = params
  const { result, loading }: ResponseType = useGertCategoryProduct(categorySlug)
  const [filterOrigin, setFilterOrigin] = useState("") 
  // const router = useRouter()
  
   console.log(filterOrigin);
   
   const filterProducts = result != null && !loading && (
    filterOrigin == "" ? result : result.filter((product: ProductType) => product.attributes.origin == filterOrigin)
   )
  
   console.log(filterProducts);
   
  return (
    <div className="max-w-6xl py-4 mx-auto sm:px-24">
      {result != null && !loading && (
        <h1 className="text-3xl font-medium">Café {result[0].attributes.category.data.attributes.categoriName}</h1>
      )}
      <Separator />
      <div className="sm:flex sm:justify-between">
        {/* Aquí pasamos la función setFilterOrigin en lugar del valor filterOrigin */}
        <FilterControsCategory setFilterOrigin={setFilterOrigin} />
        <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonShema grid={3} />
          )}
          {filterProducts != null && !loading && (
            filterProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
          {filterProducts != null && !loading && filterProducts.length == 0 && (
            <p className="text-center">No hay productos con este filtro</p>
          )}
        </div>
      </div>
    </div>
  )
}
