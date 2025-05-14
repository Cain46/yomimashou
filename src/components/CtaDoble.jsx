import { Link } from 'react-router-dom';

export default function CtaDoble({
  titulo = "¿Qué querés hacer?",
  textoBtn1 = "Explorar Obras",
  textoBtn2 = "Registrar mi Obra",
  link1 = "/explorador",
  link2 = "/registro"
}) {
  return (
    <section className="text-center my-12">
      <p className="text-xl mb-6">{titulo}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to={link1}
          className="bg-[#E94560] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          {textoBtn1}
        </Link>
        <Link
          to={link2}
          className="bg-[#6D597A] text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
        >
          {textoBtn2}
        </Link>
      </div>
    </section>
  );
}
