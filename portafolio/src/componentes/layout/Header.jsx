import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="titulo">Jesur Dev</h2>
          <p className="subtitulo">Desarrollador Web</p>
        </div>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </nav>
        <button>Dark Mode</button>
      </header>
    </>
  );
};

export default Header;
