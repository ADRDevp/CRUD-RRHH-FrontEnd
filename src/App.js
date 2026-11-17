import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoEmpleado from "./empleados/ListaEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleado />} />
          <Route exact path="/agregar" element={<AgregarEmpleado />} />
          <Route exact path="/editar/:id" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
