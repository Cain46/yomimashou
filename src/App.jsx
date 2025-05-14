import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './modules/landing/Landing';
import Login from './modules/login/Login';
import Explorador from './modules/explorador/Explorador';
import Lector from './modules/lector/Lector';
import PerfilAutor from './modules/perfil/PerfilAutor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explorador" element={<Explorador />} />
        <Route path="/lector" element={<Lector />} />
        <Route path="/perfil/:slug" element={<PerfilAutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
