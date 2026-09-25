import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { HowWeWork } from "@/components/how-we-work";
import { Cases } from "@/components/cases";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Contacts } from "@/components/contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowWeWork />
      <Cases />
      <Testimonials />
      <Pricing />
      <Faq />
      <Contacts />
    </>
  );
}
