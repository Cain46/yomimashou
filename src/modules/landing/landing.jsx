import CardObra from '../../components/CardObra';
import CtaDoble from '../../components/CtaDoble';
import { Link } from 'react-router-dom';
import FlipCardObra from '../../components/FlipCardObra';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Título principal */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#E94560]">🌙 ¡Bienvenidos a YOMIMASHOU!</h1>
        <p className="text-lg mt-2 text-[#F5F5F5]">
          Publicá tus obras. Leé las de otros. Sumate a la comunidad.
        </p>
      </header>

      {/* Sección de obras destacadas */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4 text-[#6D597A]">Obras destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <FlipCardObra
            nombre="3dias"
            tipo="Novela"
            imagen="/media/obras/neo-mercy/portada.jpg"
            descripcion="Y a los 3 dias... "
            autor="Gonzalo Ventura"
            linkPerfil="/perfil/gonzalo-ventura"
            roles={['Guionista', 'Ilustrador']}
          />

          <FlipCardObra
            nombre="Neon Genesis Evangelion"
            tipo="Manga"
            imagen="/media/obras/evangelion/evangelion.png"
            descripcion="Una lucha existencial entre humanos, mechas y ángeles en Tokio-3."
            autor="Yoshiyuki Sadamoto"
            linkPerfil="/perfil/sadamoto"
            roles={['Guionista', 'Diseñador de personajes']}
          />

          <FlipCardObra
            nombre="Saint Seiya"
            tipo="Manga"
            imagen="/media/obras/saint-seiya/saint-seiya.png"
            descripcion="Santos sagrados que defienden a Atenea con armaduras míticas."
            autor="Masami Kurumada"
            linkPerfil="/perfil/kurumada"
            roles={['Guionista', 'Ilustrador']}
          />
        </div>
      </section>

      {/* CTA doble */}
      <CtaDoble />

      {/* Footer */}
      <footer className="border-t border-[#333] pt-6 text-center text-sm text-[#999]">
        © 2025 YOMIMASHOU! · Comunidad de Creadores
      </footer>
    </div>
  );
}
