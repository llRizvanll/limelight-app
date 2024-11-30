// import FitoutBottomSection from "@/components/Fitouts/ContactCard";
// import FitoutHeader from "@/components/Fitouts/FitoutsHeader.page";
// import Footer from "@/components/Footer";
// import NavBar from "@/components/Navbar";
// import ProcessSteps from "@/components/ProcessSteps";
// import SplitSofaSection from "@/components/SplitSofaSection";
// import Testimonials from "@/components/Testimonials";



// export default function AboutUs() {
//     return (
//       <div>
//          <NavBar />
//          <FitoutHeader />
//          <Testimonials />
//          {/* <SplitSofaSection /> */}
//          <FitoutBottomSection />
//          <Footer />
//       </div>
//     );
//   }


  import dynamic from "next/dynamic";

// Dynamically import components
const NavBar = dynamic(() => import("@/components/Navbar"));
const FitoutHeader = dynamic(() => import("@/components/Fitouts/FitoutsHeader.page"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FitoutBottomSection = dynamic(() => import("@/components/Fitouts/ContactCard"));
const Footer = dynamic(() => import("@/components/Footer"));
const ProcessSteps = dynamic(() => import("@/components/ProcessSteps"));
const SplitSofaSection = dynamic(() => import("@/components/SplitSofaSection"));

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <FitoutHeader />
      <Testimonials />
      {/* <SplitSofaSection /> */}
      <FitoutBottomSection />
      <Footer />
    </div>
  );
}

  