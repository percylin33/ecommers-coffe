"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PageSucces = () => {
  const router = useRouter()
  return (
    <div className=" max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg"/>

        </div>
        <div >
          <h1 className="text-3xl">Gracias por tu compra</h1>
          <p className="my-3">Gracias por su compra. En breve, nuestro equipo se comunicará con usted para brindarle toda la información necesaria sobre el estado de su pedido y asegurarse de que tenga una experiencia de compra excepcional. Si tiene alguna consulta adicional, no dude en ponerse en contacto con nosotros. ¡Apreciamos su confianza en nosotros!</p>
          <p className="my-3">Disfruta del Cafe!</p>

          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>

      </div>
    </div>
  )
}

export default PageSucces