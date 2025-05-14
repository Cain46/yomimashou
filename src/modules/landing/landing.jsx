import CardObra from '../../components/CardObra'; // lo creamos en el paso 2
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#1A1A1D] text-white p-6">
      {/* Título principal */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#E94560]">¡Bienvenido a YOMIMASHOU!</h1>
        <p className="text-lg mt-2 text-[#F5F5F5]">Publicá tus obras. Leé las de otros. Sumate a la comunidad.</p>
      </header>

      {/* Sección de obras destacadas */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4 text-[#6D597A]">Obras destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Estas son de prueba, después se cargan dinámicamente */}
          <CardObra nombre="Samurai Pixel" tipo="Manga" imagen="/assets/samurai.jpg" />
          <CardObra nombre="La Llama Azul" tipo="Libro" imagen="/assets/llama.jpg" />
          <CardObra nombre="NeoMercy" tipo="Cómic" imagen="/assets/neo.jpg" />
        </div>
      </section>

      {/* CTA doble */}
      <section className="text-center mb-12">
        <p className="text-xl mb-6">¿Qué querés hacer?</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/explorador" className="bg-[#E94560] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Explorar Obras
          </Link>
          <Link to="/registro" className="bg-[#6D597A] text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
            Registrar mi Obra
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#333] pt-6 text-center text-sm text-[#999]">
        © 2025 YOMIMASHOU! · Comunidad de Creadores
      </footer>
    </div>
  );
}
