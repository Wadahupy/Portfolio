const services = [
  {
    title: "Mobile Development",
    description:
      "Design and build responsive mobile applications tailored for both Android and iOS, ensuring smooth performance and user experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Create user-centered and visually appealing interfaces with intuitive navigation to enhance overall product usability and experience.",
  },
  {
    title: "Web Development",
    description:
      "Develop responsive and scalable websites or web apps using modern frameworks and best practices for performance and accessibility.",
  },
  {
    title: "IT & Hardware Support",
    description:
      "Provide technical support, hardware troubleshooting, installation, and system maintenance to keep devices running smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-50" id="services">
      <div className="mx-10">
        <div className="flex flex-col justify-between items-center gap-12">
          
          {/* Left Intro */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h1 className="text-5xl md:text-subheading text-center text-primary font-black mb-2">
              SERVICES
            </h1>
            <h3 className="text-3xl text-gray-900 dark:text-primary leading-snug mb-6 text-center">
              A closer look at what I can offer to clients
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative h-64 w-full border border-neutral-400 rounded-xl shadow-lg p-6 flex flex-col justify-center transition transform hover:bg-white hover:text-secondary hover:-translate-y-1 hover:shadow-red-500/40 duration-200 text-primary`}
              >
                <div>
                  <h4 className="text-2xl font-bold mb-2 uppercase text-center">
                    {service.title}
                  </h4>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
