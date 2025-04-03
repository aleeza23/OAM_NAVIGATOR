import Certification from "@/features/Certification";
import FeaturedImages from "@/features/FeaturedImages";
import Footer from "@/features/Footer";
import Header from "@/features/Header";
import Hero from "@/features/Hero";
import Highlight from "@/features/Highlight";
import LevelUpSales from "@/features/LevelUpSales";
import RemoteSales from "@/features/RemoteSales";
import SalesNavigator from "@/features/SalesNavigator";
import SingleTestimonial from "@/features/SingleTestimonial";
import TestimonialSlider from "@/features/TestimonialSlider";
import UnlockIndependence from "@/features/UnlockIndependence";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Certification /> */}
      <Highlight />
      <FeaturedImages />
      <SalesNavigator />
      <TestimonialSlider />
      <SingleTestimonial />
      <LevelUpSales />
      <RemoteSales />
      <UnlockIndependence />
      <Footer />
    </>
  );
}
