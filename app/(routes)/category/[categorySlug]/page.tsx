"use client"
import { useGertCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import FilterControsCategory from "@/app/(routes)/category/components/filters-contros-category";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";


export default function Page(){
  const params = useParams()
  const {categorySlug}  = params

  console.log(categorySlug);
  
  const {result, loading} :ResponseType = useGertCategoryProduct(categorySlug)
  console.log(result);
  
  return (
  <div className="max-w-6xl py-4 mx-auto sm:px-24">
    {result != null && !loading && (
      <h1 className="text-3xl font-medium">Cafe {result[0].attributes.category.data.attributes.categoriName}</h1>
    )}
    <Separator />
    <div className="sm:flex sm:justify-between">
      <FilterControsCategory />

    </div>
  </div>
  )
}
