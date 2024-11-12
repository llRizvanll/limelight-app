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
      <ProtectionSection />
      <WellBeing />
      <ProcessSteps />
      <BestInCompetition />
      <Testimonials />
      <FAQs/>
      <SplitSofaSection />
      <Footer />
    </>
  );
}
