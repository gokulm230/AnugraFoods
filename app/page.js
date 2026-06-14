import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import Categories from "@/components/home/Categories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowItWorks from "@/components/home/HowItWorks";
import RecipeSection from "@/components/home/RecipeSection";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import CTA from "@/components/home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      {/* <AboutSnippet /> */}
      <FeaturedProducts />
      <WhyChooseUs />
      <RecipeSection />
      <BlogSection />
      {/* <HowItWorks /> */}
      <Testimonials />
      {/* <InstagramFeed /> */}
      {/* <CTA /> */}
    </>
  );
} 