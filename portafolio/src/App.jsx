import Header from "./componentes/layout/Header.jsx";
import Hero from "./componentes/layout/Hero.jsx";
import Clientes from "./componentes/layout/Clientes.jsx";
function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
      </div>
    </>
  );
}

export default App;
