import { Link } from "react-router-dom";

// --- Iconos para la sección de Contacto ---
const LocationIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// --- Componente para Redes Sociales ---
const SocialLink = ({ href, label, children }) => {
  const props = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-slate-400 hover:text-white transition-colors",
  };
  return (
    <a {...props}>
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 border-t-4 border-teal-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Sobre la Empresa */}
          <div className="text-center px-4">
            <img
              src="/logo-AuditPro.png"
              alt="Logo AuditPro"
              className="h-14 mb-4 mx-auto brightness-0 invert"
            />
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              Comprometidos con la excelencia y la integridad, brindando certeza
              y confianza a través de servicios de auditoría y consultoría de
              primer nivel.
            </p>
            <div className="flex justify-center space-x-5 mt-6">
              <SocialLink href="https://wa.me/51983885114" label="WhatsApp">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/anthony-daniel-diaz-yacsahuanga-05092a2a7/"
                label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=4todiazyacsahuangaanthony@gmail.com"
                label="Gmail"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="text-center px-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/portafolio"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="text-center px-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/servicios"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Auditoría Financiera
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Consultoría Fiscal
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Auditoría Interna
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  Due Diligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="text-center px-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Ponerse en Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center">
                <LocationIcon />
                <span>
                  123 Calle Ficticia, <br />
                  Ciudad, País
                </span>
              </li>
              <li className="flex items-center justify-center">
                <MailIcon />
                <a className="text-slate-400 hover:text-white">
                  contacto@auditpro.com
                </a>
              </li>
              <li className="flex items-center justify-center">
                <PhoneIcon />
                <a className="text-slate-400 hover:text-white">
                  +51 983 885 114
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-slate-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} AuditPro. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4">
            <Link
              // to="/politica-privacidad"
              className="text-slate-400 hover:text-white"
            >
              Política de Privacidad
            </Link>
            <Link
              // to="/terminos-servicio"
              className="text-slate-400 hover:text-white"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
