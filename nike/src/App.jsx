import Navbar from "./components/Navbar";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section id="home" className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section id="products" className="padding">
        <PopularProducts />
      </section>
      <section id="about-us" className="padding">
        <SuperQuality />
      </section>
      <section id="services" className="padding-x py-10">
        <Services />
      </section>
      <section id="special-offers" className="padding">
        <SpecialOffer />
      </section>
      <section id="customer-reviews" className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
