const CLientes = () => {
  return (
    <>
      <section className="clientes">
        <div className="encabezado">
          <h3 className="titulo">Nuestros Clientes</h3>
          <p className="subtitulo">
            Las voces de nuestros clientes son imposibles de callar
          </p>
        </div>
        <div className="logos">
          <img
            src="./../assets/logo/automobile.svg"
            alt="Logo auto"
            className="logo"
          />
          <img
            src="./../assets/logo/hotel.svg"
            alt="Logo hotel"
            className="logo"
          />
          <img
            src="./../assets/office.svg"
            alt="Logo oficina"
            className="logo"
          />
          <img
            src="./assets/logo/renting.svg"
            alt="Logo Rental auto"
            className="logo"
          />
          <img
            src=".assets/logo/store.svg"
            alt="Logo Tienda"
            className="logo"
          />
        </div>
      </section>
    </>
  );
};

export default Clientes;
