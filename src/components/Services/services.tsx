import { ServiceCard } from "./serviceCard";
import { services } from "./servicesData";

function Services() {
  return (
    <section
      id="services"
      className="w-full flex flex-col gap-4 justify-center"
    >
      <header className="flex justify-between items-center">
        <h2 className="font-medium">Latest Services</h2>

        {/* <Link href="/projects">
          <div className=" flex items-center transition-colors duration-200 gap-1.5 text-sm cursor-pointer hover:text-foreground text-muted-foreground">
            View All
            <ArrowRight size={16} />
          </div>
        </Link> */}
      </header>

      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}

export default Services;
