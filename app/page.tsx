import Banner from "@/components/Home/Banner";
import BlogSection from "@/components/Home/BlogSection";
import CTA from "@/components/Home/CTA";
import CustomerReviews from "@/components/Home/CustomerReviews";
import CustomIndustry from "@/components/Home/CustomIndustry";
import Faqs from "@/components/Home/Faqs";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FinishingOptions from "@/components/Home/FinishingOptions";
import IndustrySlider from "@/components/Home/IndustrySlider";
import PackagingCustomizer from "@/components/Home/PackagingCustomizer";
import PackagingGallery from "@/components/Home/PackagingGallery";
import PackagingSteps from "@/components/Home/PackagingSteps";
import QuoteForm from "@/components/Home/QuoteForm";
import ScrollContent from "@/components/Home/ScrollContent";
import Sustainable from "@/components/Home/Sustainable";
import TrustedBrands from "@/components/Home/TrustedBrands";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Banner />
      <CustomIndustry />
      <IndustrySlider />
      <WhoWeAre />
      <FeaturedProducts />
      <Sustainable />
      <FinishingOptions />
      <PackagingSteps />
      <PackagingCustomizer />
      <QuoteForm />
      <PackagingGallery />
      <ScrollContent />
      <Faqs />
      <TrustedBrands />
      <CustomerReviews />
      <BlogSection />
      <CTA />
    </main>
  );
}
