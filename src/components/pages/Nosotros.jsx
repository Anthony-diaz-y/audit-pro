import { Link } from "react-router-dom";

// Placeholder icons
const MissionIcon = () => (
  <svg
    className="w-12 h-12 text-teal-700 mx-auto mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const VisionIcon = () => (
  <svg
    className="w-12 h-12 text-teal-700 mx-auto mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const teamMembers = [
  {
    name: "Nombre del Socio Principal",
    title: "Socio Director y Fundador",
    imageUrl:
      "https://www.unir.net/wp-content/uploads/2024/08/Auditoria-fiscal-caracteristicas-e-importancia1.jpg", // Placeholder image
  },
  {
    name: "Nombre del Gerente",
    title: "Gerente de Auditoría",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "Nombre del Especialista",
    title: "Especialista Fiscal",
    imageUrl: "https://via.placeholder.com/200",
  },
];

export default function Nosotros() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt="Nuestro equipo de trabajo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Conozca a AuditPro</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Somos más que auditores; somos los socios estratégicos que su
            empresa necesita.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center p-6">
              <MissionIcon />
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Nuestra Misión
              </h2>
              <p className="text-gray-600">
                Proveer servicios de auditoría y consultoría de la más alta
                calidad, basados en la integridad, la objetividad y un profundo
                conocimiento técnico, para generar confianza en la información
                financiera y ayudar a nuestros clientes a alcanzar sus metas.
              </p>
            </div>
            <div className="text-center p-6">
              <VisionIcon />
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Nuestra Visión
              </h2>
              <p className="text-gray-600">
                Ser la firma de auditoría y consultoría líder y de mayor
                confianza en la región, reconocida por nuestro profesionalismo,
                la calidad de nuestro equipo y nuestra capacidad para adaptarnos
                e innovar en un entorno de negocios cambiante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 mt-2">
              El motor de nuestro éxito y la garantía de su tranquilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageUrl}
                  alt={`Foto de ${member.name}`}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover bg-gray-200"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-teal-700 font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Únase a nuestra lista de clientes satisfechos.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Permítanos ser el socio estratégico que su empresa merece.
          </p>
          <Link
            to="/contacto"
            className="bg-teal-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-900 transition-colors duration-300"
          >
            Contactar Ahora
          </Link>
        </div>
      </section> */}
    </>
  );
}
