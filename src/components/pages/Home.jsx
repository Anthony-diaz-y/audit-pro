import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// --- Componentes de Iconos ---
const ShieldIcon = () => (
  <svg
    className="w-12 h-12 text-teal-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0 12.02 12.02 0 00-2.382-8.944z"
    />
  </svg>
);
const ChartBarIcon = () => (
  <svg
    className="w-12 h-12 text-teal-700"
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
const HandshakeIcon = () => (
  <svg
    className="w-12 h-12 text-teal-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 21l-7-7-7 7M5 10v4a1 1 0 001 1h3l5-5-5-5H6a1 1 0 00-1 1v4zm14 0v4a1 1 0 01-1 1h-3l-5-5 5-5h3a1 1 0 011 1v4z"
    ></path>
  </svg>
);

// --- Imágenes para el Carrusel ---
const heroImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1920&q=80",
];

// --- Componente Principal ---
export default function Home() {
  return (
    <>
      {/* --- VISTA DE ESCRITORIO (Desktop) --- */}
      <section className="hidden md:flex relative bg-slate-50 min-h-screen items-center overflow-hidden">
        <div className="container mx-auto h-full flex items-center relative z-10">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Excelencia y Precisión en Auditoría
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              Brindamos certeza y confianza a través de servicios de auditoría y
              consultoría adaptados a las necesidades de su negocio.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <Link
                to="/servicios"
                className="bg-teal-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-900 transition-colors duration-300"
              >
                Nuestros Servicios
              </Link>
              <Link
                to="/contacto"
                className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full md:w-3/5 h-full mask-fade-to-left">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={2000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Fondo de bienvenida ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- VISTA MÓVIL (NUEVO DISEÑO) --- */}
      <section className="block md:hidden relative h-screen">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={2000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Fondo de bienvenida ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Excelencia y Precisión en Auditoría
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Certeza y confianza para las necesidades de su negocio.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="/servicios"
                className="bg-teal-600 text-white font-bold text-center py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Nuestros Servicios
              </Link>
              <Link
                to="/contacto"
                className="bg-white text-gray-800 font-bold text-center py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Secciones restantes (comunes para ambas vistas) --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Nuestra Promesa
            </h2>
            <p className="text-gray-600 mt-2">
              Los pilares que definen nuestro trabajo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <ShieldIcon />
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Integridad Absoluta
              </h3>
              <p className="text-gray-600">
                Actuamos con una ética inquebrantable, garantizando
                transparencia y honestidad en cada proceso.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ChartBarIcon />
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Experiencia Comprobada
              </h3>
              <p className="text-gray-600">
                Nuestro equipo de profesionales posee un profundo conocimiento y
                una vasta experiencia en el sector.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HandshakeIcon />
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Confianza y Compromiso
              </h3>
              <p className="text-gray-600">
                Construimos relaciones a largo plazo basadas en la confianza y
                el compromiso con los objetivos de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Servicios a su Medida
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Ofrecemos una gama completa de servicios para fortalecer la salud
            financiera y operativa de su empresa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Auditoría Financiera
              </h3>
              <p className="text-gray-600 mb-4">
                Evaluaciones exhaustivas para garantizar la precisión y el
                cumplimiento de sus estados financieros.
              </p>
              <Link
                to="/servicios"
                className="text-teal-700 font-bold hover:underline"
              >
                Leer más &rarr;
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Consultoría Fiscal
              </h3>
              <p className="text-gray-600 mb-4">
                Asesoramiento estratégico para optimizar su carga tributaria y
                asegurar el cumplimiento normativo.
              </p>
              <Link
                to="/servicios"
                className="text-teal-700 font-bold hover:underline"
              >
                Leer más &rarr;
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Auditoría Interna
              </h3>
              <p className="text-gray-600 mb-4">
                Fortalecemos sus controles internos y procesos para mitigar
                riesgos y mejorar la eficiencia.
              </p>
              <Link
                to="/servicios"
                className="text-teal-700 font-bold hover:underline"
              >
                Leer más &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
