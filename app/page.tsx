import Banner from "@/components/Home/Banner";
import CustomIndustry from "@/components/Home/CustomIndustry";
import Faqs from "@/components/Home/Faqs";
import IndustrySlider from "@/components/Home/IndustrySlider";
import ScrollContent from "@/components/Home/ScrollContent";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Banner />
      <CustomIndustry />
      <IndustrySlider />
      <WhoWeAre />
      <ScrollContent />
      <Faqs />
    </main>
  );
}
