import ClientsSection from './components/home/clients-section';
import EmpoweredTeamSection from './components/home/empowered-team-section';
import HomepageCarousel from './components/home/homepage-carousel';
import ServicesCardsSection from './components/home/services-cards-section';
import ShowcaseSection from './components/home/showcase-section';
import TestimonialsSection from './components/home/testimonials-section';
import WhyChooseUsSection from './components/home/why-choose-us-section';

export default function Home() {
  return (
    <div>
      {/* Hero or carousel at the top */}
      <HomepageCarousel />

      {/* Other homepage sections */}
      <ShowcaseSection />
      <ServicesCardsSection />
      <WhyChooseUsSection />
      <EmpoweredTeamSection />
      <TestimonialsSection />
      <ClientsSection />
    </div>
  );
}
