import { Link } from "react-router-dom";
import { Cards } from "../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const portfolioItems = [
  {
    title: "Optimización Fiscal para Grupo Retail",
    category: "Consultoría Fiscal",
    description:
      "Se realizó un análisis exhaustivo de la estructura fiscal de un importante grupo del sector retail, identificando oportunidades de ahorro y optimización que resultaron en una reducción del 15% en su carga tributaria anual.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyWCL4zySKnohnpZ9kG5jABvJxXOnEL11uw&s",
  },
  {
    title: "Auditoría de Compra (Due Diligence) para Startup Tecnológica",
    category: "Fusiones y Adquisiciones",
    description:
      "Llevamos a cabo un proceso de due diligence financiero y operativo para un fondo de inversión, asegurando una valoración precisa y transparente de una startup tecnológica antes de su adquisición.",
    imageUrl:
      "https://www.bbva.com/wp-content/uploads/2023/11/BBVA-due-diligence-innovacion-1024x575.jpg",
  },
  {
    title: "Implementación de Controles Internos para Empresa Manufacturera",
    category: "Auditoría Interna",
    description:
      "Diseñamos e implementamos un nuevo marco de control interno basado en COSO, fortaleciendo la gobernanza corporativa y reduciendo significativamente el riesgo de fraude y errores operativos.",
    imageUrl:
      "https://www.contpaqi.com/hubfs/Publicaciones/Gestion%20Empresarial/C%C3%B3mo%20implementar%20un%20sistema%20de%20control%20interno%20efectivo%20en%20tu%20empresa.jpg",
  },
  {
    title: "Auditoría de Estados Financieros para ONG",
    category: "Auditoría Financiera",
    description:
      "Proporcionamos una auditoría completa y transparente para una organización no gubernamental, aumentando la confianza de sus donantes y asegurando el cumplimiento de las normativas para entidades sin fines de lucro.",
    imageUrl:
      "https://krestonbsg.com.mx/uploads/images/Expertos-realizando-una-auditoria-de-estados-financieros.jpg",
  },
  {
    title: "Reestructuración Corporativa",
    category: "Consultoría",
    description:
      "Asesoramos a una empresa familiar en su proceso de reestructuración corporativa para optimizar la gestión y preparar a la siguiente generación para el liderazgo, asegurando la continuidad y el crecimiento del negocio.",
    imageUrl:
      "https://www.marinconsulting.es/wp-content/uploads/2016/06/reestructuracion-empresarial-2.jpg",
  },
  {
    title: "Informe de Sostenibilidad (ESG) para Empresa Agrícola",
    category: "Informes ESG",
    description:
      "Elaboramos y verificamos el primer informe de sostenibilidad de una empresa líder en el sector agrícola, mejorando su posicionamiento de marca y atrayendo a inversores socialmente responsables.",
    imageUrl:
      "https://spro.com.br/wp-content/uploads/2024/02/agricultor-com-close-up-tablet.jpg",
  },
];

export default function Portafolio() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <>
      <section className="relative h-[60vh] bg-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1920&q=80"
            alt="Casos de éxito"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Portafolio de Casos de Éxito
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Resultados tangibles y valor duradero. Explore cómo hemos ayudado a
            empresas como la suya.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Cards
                key={index}
                title={item.title}
                category={item.category}
                description={item.description}
                imageUrl={item.imageUrl}
                aosType="fade-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
