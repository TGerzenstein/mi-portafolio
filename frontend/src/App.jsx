import React from "react";
import Navbar from "./components/NavBar/Navbar";
import HeroComponent from "./components/Hero/HeroComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import ValueComponent from "./components/ValueCard/ValueComponent";
import QuoteCardComponent from "./components/QuoteCard/QuoteCardComponent";
import DigitalMarketingAuditCard from "./components/DigitalMarketingAuditCard/DigitalMarketingAuditCard";
import ServicesSectionComponent from "./components/ServicesSection/ServicesSectionComponent";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroComponent />
      <ServicesSectionComponent />
      <ValueComponent />
      <DigitalMarketingAuditCard />
      <QuoteCardComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
