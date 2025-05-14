import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/index.css';

export default function FlipCardObra({ nombre, tipo, imagen, descripcion, autor, linkPerfil, roles }) {
  return (
    <div className="perspective relative w-[500px] min-h-[600px] mx-auto">
      <div className="w-full h-full transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">

        {/* Frente */}
        <div className="absolute inset-0 backface-hidden bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div className="w-full h-[320px] bg-black flex items-center justify-center overflow-hidden rounded-md">
            <img src={imagen} alt={nombre} className="w-full h-full object-contain" />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold">{nombre}</h3>
            <p className="text-sm text-gray-300">{tipo}</p>
          </div>
        </div>

        {/* Dorso */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gray-900 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div className="text-sm">
            <p>{descripcion}</p>
            <p className="text-xs text-purple-300 mt-4">Roles: {roles.join(', ')}</p>
          </div>
          <Link
            to={linkPerfil}
            className="text-sm text-blue-400 underline hover:text-blue-200 mt-6 text-center"
          >
            Ver perfil de {autor}
          </Link>
        </div>

      </div>
    </div>
  );
}

FlipCardObra.propTypes = {
  nombre: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  linkPerfil: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
