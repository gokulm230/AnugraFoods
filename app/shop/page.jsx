import ShopHero from "@/components/shop/ShopHero";
import ShippingNotice from "@/components/shop/ShippingNotice";
import WhereToBuy from "@/components/shop/WhereToBuy";
import SeafoodSection from "@/components/shop/SeafoodSection";
import OrganicSection from "@/components/shop/OrganicSection";
import CTA from "@/components/home/CTA";

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShippingNotice />
      <WhereToBuy />
      <SeafoodSection />
      <OrganicSection />
      <CTA />
    </>
  );
}