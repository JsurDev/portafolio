import Header from "./componentes/layout/Header.jsx";
import Hero from "./componentes/layout/Hero.jsx";
import Clientes from "./componentes/layout/Clientes.jsx";
import Trabajos from ".//componentes/layout/Trabajos.jsx";
function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
        <Trabajos />
      </div>
    </>
  );
}

export default App;
