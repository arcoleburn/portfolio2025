import Image from "next/image";

const projects = [
  {
    name: "KFC",
    summary:
      "Joined KFC team as frontend developer. Lead development of major features for their enterprise scale e-commerce app, most notably: “Delivery-as-a-Service”, significant cart upgrades, “Add Extras” upsell initiative, and major UI upgrades. Contributed to > 50% increase in conversions YoY.",
    link: "https://kfc.com",
    technologies: [],
  },
  {
    name: "OptumRx",
    summary:
      "Consulted with Optum's senior architecture team to buildout a microfrontend strategy using webcomponents.",
    link: "",
    technologies: [],
  },
  {
    name: "Pizza Hut",
    summary:
      "Joined Pizza Hut's QE team to lead overhaul of their testing infrastructure across the organization with a focus on automation.",
    link: "",
    technologies: [],
  },
  {
    name: "Medical Device Startup",
    summary:
      "Joined development team of a small medical device startup. Lead development of the UI for a new notifications system for their product used in nursing homes and hospitals.",
    link: "",
    technologies: [],
  },
  {
    name: "Medline",
    summary:
      "Joined Medline team as a lead React developer to work on large scale modernizaiton effort, migrating an ecommerce application from Oracle and Wordpress to a Next.JS based microfrontend architecture.",
    link: "",
    technologies: [],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-700 relative">
                <Image
                  src={`/code.jpg`}
                  alt={`Project ${project.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {project.summary}
                </p>
                <div className="flex gap-2">
                  {/* <a
                    target="_blank"
                    href={project.link ?? "#"}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                  >
                    View Project →
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
