import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="max-container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
