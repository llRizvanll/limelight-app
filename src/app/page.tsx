
import React from 'react';
import dynamic from 'next/dynamic';
import ProtectionSection from '@/components/ProtectionSection';
import WellBeing from '@/components/WellBeing';
// Dynamically import components, and make sure they are marked as client components
// const Banner = dynamic(() => import('@/components/Banner'));
// const BestInclass = dynamic(() => import('@/components/BestInClass'));
// const BestInCompetition = dynamic(() => import('@/components/BestInCompetition'));
// const FAQs = dynamic(() => import('@/components/FAQ'));
// const Footer = dynamic(() => import('@/components/Footer'));
// // const NavBar = dynamic(() => import('@/components/Navbar'));
// const NavBar = dynamic(() => import('@/components/Navbar'), { ssr: false });
// const ProcessSteps = dynamic(() => import('@/components/ProcessSteps'));
// const SplitSofaSection = dynamic(() => import('@/components/SplitSofaSection'));
// const Testimonials = dynamic(() => import('@/components/Testimonials'));

const FAQs = dynamic(() => import('@/components/FAQ'));
const BestInCompetition = dynamic(() => import('@/components/BestInCompetition'));
const Banner = dynamic(() => import('@/components/Banner'));
const BestInclass = dynamic(() => import('@/components/BestInClass'));
const NavBar = dynamic(() => import("@/components/Navbar"));
const FitoutHeader = dynamic(() => import("@/components/Fitouts/FitoutsHeader.page"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FitoutBottomSection = dynamic(() => import("@/components/Fitouts/ContactCard"));
const Footer = dynamic(() => import("@/components/Footer"));
const ProcessSteps = dynamic(() => import("@/components/ProcessSteps"));
const SplitSofaSection = dynamic(() => import("@/components/SplitSofaSection"));

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
      <FAQs />
      <SplitSofaSection />
      <Footer />
    </>
  );
}
