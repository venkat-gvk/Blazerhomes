// import CenteredCTAText from "../components/ui/CenteredCTAText";

import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";

// import FooterCTA from "../components/ui/FooterCTA";
// import Stats from "../components/ui/Stats";

import Hero from "../components/ui/Hero";
import Footer from "../components/ui/Footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/ui/Navbar"));

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* <CenteredCTAText /> */}

      <Features />

      {/* <Stats /> */}

      <FAQs />

      {/* <FooterCTA /> */}

      <Footer />
    </>
  );
}
