import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Personas from "./pages/personas";
import Registro from "./pages/registro";
import RegistroFamiliar from "./pages/registroFamiliar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/persona/:id" element={<Registro />} />
        <Route path="/persona/:id/familiar" element={<RegistroFamiliar />} />
        <Route path="/persona/:id/edit" element={<RegistroFamiliar />} />
      </Routes>
    </>
  );
}

export default App;
