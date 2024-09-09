/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { buttonVariants } from "./ui/button"
const BannerProduct = () => {
  return (
    <>
  <div className="text-center py-8" id="campo">
  <h2 className="font-bold text-3xl md:text-5xl py-4">Café del campo</h2>
  <div className="flex flex-col md:flex-row justify-center items-center m-4">
    <img src="/campo.jpg" alt="campo" className="rounded-md m-4 max-w-full md:max-w-[300px]" />
    <p className="max-w-[500px] m-4 text-sm md:text-base text-left">
      El café natural, conocido por ser una de las formas más puras de disfrutar esta bebida, ofrece una variedad de beneficios para la salud y el bienestar. Este tipo de café se procesa sin químicos ni aditivos, manteniendo sus propiedades naturales intactas.<br/><br/>
      Optar por café natural significa disfrutar de una experiencia más auténtica, saludable y respetuosa con el medio ambiente, ya que su producción es más sostenible y menos dependiente de químicos.
    </p>
  </div>
</div>
  <div className="mt-4 text-center" id="ex">
    <p>Sumergete en una experiencia unica</p>
    <h4 className="mt-2 text-5xl font-extrabold uppercase">Cafe Exquisito</h4>
    <p className="my-2 text-lg">Despierta tus sentidos con cada sabor</p>
    <Link href="#" className={buttonVariants()}>Comprar</Link>
  </div>
  
  <div className="h-[350px] bg-cover lg:h-[900px] bg-[url('/ingbaner.jpg')] bg-center mt-5" />
  
  
  </>
  )
}

export default BannerProduct