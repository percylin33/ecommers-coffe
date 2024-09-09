import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarrouselTextBanner from "@/components/carrousel-text-banner"
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main >
      <CarrouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount id="banner-discount" />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
