import { Link } from "react-router-dom";

const ServiceIcon = () => (
  <svg
    className="w-10 h-10 text-teal-700 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const servicesData = [
  {
    title: "Auditoría de Estados Financieros",
    description:
      "Realizamos un examen exhaustivo e independiente de los estados financieros de su empresa para proporcionar una seguridad razonable sobre su integridad y cumplimiento con las normativas vigentes (NIIF, US GAAP). Nuestro enfoque meticuloso ayuda a fortalecer la confianza de inversores, acreedores y otros stakeholders.",
  },
  {
    title: "Consultoría y Planificación Fiscal",
    description:
      "Ofrecemos asesoramiento estratégico para optimizar su carga tributaria dentro del marco legal. Analizamos su situación fiscal para identificar oportunidades de ahorro y asegurar el cumplimiento de todas las obligaciones, minimizando riesgos y contingencias.",
  },
  {
    title: "Auditoría Interna y de Procesos",
    description:
      "Evaluamos y mejoramos la eficacia de sus procesos de gestión de riesgos, control y gobierno corporativo. Nuestra auditoría interna ayuda a identificar ineficiencias, fortalecer los controles y asegurar que los procesos operativos estén alineados con los objetivos estratégicos de la organización.",
  },
  {
    title: "Due Diligence Financiero",
    description:
      "Apoyamos en procesos de fusiones y adquisiciones (M&A) mediante un análisis de due diligence completo. Investigamos a fondo la situación financiera y los riesgos de la empresa objetivo para que pueda tomar decisiones de inversión informadas y seguras.",
  },
  {
    title: "Prevención de Lavado de Dinero (PLD)",
    description:
      "Ayudamos a su organización a diseñar e implementar programas robustos de PLD y financiamiento al terrorismo. Verificamos el cumplimiento normativo, evaluamos riesgos y capacitamos a su personal para proteger la reputación e integridad de su negocio.",
  },
  {
    title: "Informes de Sostenibilidad (ESG)",
    description:
      "Verificamos y aseguramos la información de sus informes de sostenibilidad (Ambiental, Social y de Gobernanza). Ayudamos a comunicar de manera transparente y fiable su desempeño no financiero, aumentando la confianza de inversores y la sociedad.",
  },
];

export default function Servicios() {
  return (
    <>
      <section className="relative h-[60vh] bg-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
            alt="Servicios de auditoría"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Soluciones integrales de auditoría y consultoría diseñadas para
            aportar valor y seguridad a su negocio.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <ServiceIcon />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
