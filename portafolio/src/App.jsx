import Header from "./componentes/layout/Header.jsx";
import Hero from "./componentes/layout/Hero.jsx";
import Clientes from "./componentes/layout/Clientes.jsx";
import Trabajos from ".//componentes/layout/Trabajos.jsx";
import AcercaDe from "./componentes/layout/AcercaDe.jsx";
import Contacto from "./componentes/layout/Contacto.jsx";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
        <Trabajos />
        <AcercaDe />
        <Contacto />
      </div>
    </>
  );
}

export default App;
