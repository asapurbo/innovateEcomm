import ExperiencePart from "../serviceLayout/ExperiencePart";
import ServiceMainBanner from "../serviceLayout/ServiceMainBanner";
import ServiceWorkingProcess from "../serviceLayout/ServiceWorkingProcess";
import ServicesAgency from "../serviceLayout/ServicesAgency";
import CounterPart from '../commonLayout/CounterPart'
import PricingForBusinessPart from "../serviceLayout/PricingForBusinessPart";
const Service = () => {
  return (
    <>
      <ServiceMainBanner />
      <ServiceWorkingProcess/>
      <ExperiencePart/>
      <ServicesAgency/>
      <CounterPart/>
      <PricingForBusinessPart/>
    </>
  );
};

export default Service;
