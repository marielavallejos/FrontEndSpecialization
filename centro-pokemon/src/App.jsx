import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { FormularioProvider } from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <FormularioProvider> 
        {/* El provider envuelve donde quiere compartir la info en aplicación, en este caso el router */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Formulario />} />
      </Routes>
      </FormularioProvider>
    </div>
  );
}

export default App;
