import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [status, setStatus] = useState("idle");
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_khskaon",
        "template_ixpcjz3",
        event.target,
        "sKQH6lXvttTHvhQ0F"
      )
      .then(
        () => {
          setStatus("success");
          event.target.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
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
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Ponte en Contacto</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres solicitar una cotización? Estamos
            aquí para ayudarte.
          </p>
        </div>
      </section>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-teal-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-900 transition-colors duration-300 disabled:bg-gray-400"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
              {status === "success" && (
                <p className="text-center text-green-600 mt-4">
                  ¡Gracias por tu mensaje! Ha sido enviado correctamente.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-600 mt-4">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo más tarde.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
