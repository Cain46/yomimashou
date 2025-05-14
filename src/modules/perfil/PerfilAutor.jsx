import React from 'react';
import { useParams } from 'react-router-dom';
import FlipCardObra from '../../components/FlipCardObra';

const autores = {
  'kira-saito': {
    nombre: 'Gonzalo Ventura',
    bio: 'Autora cyberpunk amante de la IA, los datos corruptos y los paisajes distópicos.',
    roles: ['Guionista', 'Ilustradora'],
    obras: [
      {
        nombre: 'NeoMercy',
        tipo: 'Novela',
        imagen: '/media/obras/neo-mercy/portada.jpg',
        descripcion: 'y al 3er dia...',
        autor: 'Gonzalo Ventura',
        linkPerfil: '/perfil/gonzalo-ventura',
        roles: ['Guionista', 'Ilustradora']
      }
    ]
  },
  // podés sumar más autores acá
};

export default function PerfilAutor() {
  const { slug } = useParams();
  const autor = autores[slug];

  if (!autor) {
    return <div className="text-center text-white p-10">Autor no encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#E94560]">{autor.nombre}</h1>
        <p className="text-md mt-2 text-gray-300">{autor.bio}</p>
        <p className="text-sm mt-2 text-purple-300">Roles: {autor.roles.join(', ')}</p>
      </header>

      <section>
        <h2 className="text-2xl mb-4 text-[#6D597A] text-center">Obras de {autor.nombre}</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {autor.obras.map((obra, i) => (
            <FlipCardObra key={i} {...obra} />
          ))}
        </div>
      </section>
    </div>
  );
}
