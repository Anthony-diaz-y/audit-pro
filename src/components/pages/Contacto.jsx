import { useState } from "react";
import { Link } from "react-router-dom";

// --- Iconos para el formulario ---
const UserIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
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
const SubjectIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

export default function Contacto() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        event.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <section className="relative h-[60vh] bg-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&w=1920&q=80"
            alt="Contacto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-white pt-24">
          <h1 className="text-4xl md:text-6xl font-bold">Ponte en Contacto</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres solicitar una cotización? Estamos
            aquí para ayudarte.
          </p>
        </div>
      </section>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-gray-700 text-center md:text-justify">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Información de Contacto
                </h2>
                <p className="mb-8">
                  Puedes contactarnos a través de este formulario o por
                  cualquiera de los siguientes medios. ¡Será un placer
                  atenderte!
                </p>
                <div className="space-y-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <MailIcon />
                    <span className="ml-3">contacto@auditpro.com</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <UserIcon />
                    <span className="ml-3">+51 983 885 114</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <SubjectIcon />
                    <span className="ml-3">
                      123 Calle Ficticia, Ciudad, País
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <form
                  action="https://formsubmit.co/4todiazyacsahuangaanthony@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo Mensaje de Contacto - AuditPro"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="space-y-6">
                    {/* --- CAMPO NOMBRE --- */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Tu Nombre"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    {/* --- CAMPO EMAIL --- */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Tu Correo Electrónico"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    {/* --- CAMPO ASUNTO --- */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SubjectIcon />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Asunto"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="Tu Mensaje..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full bg-teal-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-900 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {status === "sending"
                          ? "Enviando..."
                          : "Enviar Mensaje"}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-6 h-6 text-center">
                  {status === "success" && (
                    <p className="text-green-600 font-medium">
                      ¡Gracias! Tu mensaje ha sido enviado.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 font-medium">
                      Hubo un error. Por favor, inténtalo de nuevo.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
