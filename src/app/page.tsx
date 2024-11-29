import Banner from "@/components/Banner";
import BestInclass from "@/components/BestInClass";
import BestInCompetition from "@/components/BestInCompetition";
import FAQs from "@/components/FAQ";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProcessSteps from "@/components/ProcessSteps";
import ProtectionSection from "@/components/ProtectionSection";
import SplitSofaSection from "@/components/SplitSofaSection";
import Testimonials from "@/components/Testimonials";
import WellBeing from "@/components/WellBeing";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <BestInclass />
      {/* <span className=" flex justify-center pb-7 border-b border-[#66656333] w-full"></span> */}

      <ProtectionSection />
      {/* <WellBeing /> */}
      <ProcessSteps />
           {/* <span className=" flex justify-center pb-7 border-b border-[#66656333] w-full"></span> */}
      <BestInCompetition />
      <Testimonials />
      <FAQs/>
      <SplitSofaSection />
      <Footer />
    </>
  );
}
