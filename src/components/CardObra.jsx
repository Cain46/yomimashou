import { Link } from 'react-router-dom';

export default function CardObra({ nombre, tipo, imagen, resumen, autorId }) {
  return (
    <div className="w-full h-72 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">

        {/* Frente */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md overflow-hidden bg-white text-black">
          <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{nombre}</h3>
            <p className="text-sm text-gray-500">{tipo}</p>
          </div>
        </div>

        {/* Reverso */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-md bg-[#1A1A1D] text-white p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-md font-bold mb-2">{nombre}</h3>
            <p className="text-sm text-gray-300 line-clamp-4">{resumen}</p>
          </div>
          <Link
            to={`/perfil/${autorId}`}
            className="mt-4 inline-block bg-[#E94560] text-white py-1 px-3 rounded hover:bg-red-700 transition"
          >
            Ver autor
          </Link>
        </div>
      </div>
    </div>
  );
}
