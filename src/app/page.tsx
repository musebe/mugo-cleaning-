import HomepageCarousel from "./components/home/homepage-carousel";
import ServicesCardsSection from "./components/home/services-cards-section";
import ShowcaseSection from "./components/home/showcase-section";


export default function Home() {
  return (
    <div>
      {/* Other homepage sections */}
      <HomepageCarousel />
      <ShowcaseSection />
      <ServicesCardsSection />
     
    </div>
  );
}
