


  import ServiceOfferSection from "@/components/AboutUs/servicesweoffer";
import dynamic from "next/dynamic";

// Dynamically import components
const NavBar = dynamic(() => import("@/components/Navbar"));
const AboutUsHeader = dynamic(() => import("@/components/AboutUs/AboutUsHeader"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const AboutBottomSection = dynamic(() => import("@/components/AboutUs/aboutContactCard"));
const Footer = dynamic(() => import("@/components/Footer"));
const OriginStorySection = dynamic(() => import("@/components/AboutUs/Originstory/index"));
const AboutUsSecondCard = dynamic(() => import("@/components/AboutUs/index"));

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutUsHeader />
  
           <OriginStorySection />
           <AboutUsSecondCard />
           <ServiceOfferSection />
      {/* <Testimonials /> */}
      {/* <SplitSofaSection /> */}
      <AboutBottomSection />
      <Footer />
    </div>
  );
}

  