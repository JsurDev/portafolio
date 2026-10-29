const Trabajos = () => {
  return (
    <>
      <section className="trabajos" id="trabajos">
        <div className="encabezados">
          <h3 className="titulo">
            <p className="subtitulo">
              Trabajos que otras empresas utilizan desarrollados por Jesur Dev
            </p>
          </h3>
        </div>
        <div className="filtros">
          <label htmlFor="todos">
            <input type="radio" name="categoria" id="todos" />
            <span className="opcion">Todos</span>
          </label>
          <label htmlFor="WebDesign">
            <input type="radio" name="categoria" id="WebDesign" />
            <span className="opcion">Web</span>
          </label>
          <label htmlFor="AImodels">
            <input type="radio" name="categoria" id="AImodels" />
            <span className="opcion">AI</span>
          </label>
          <label htmlFor="MobileApp">
            <input type="radio" name="categoria" id="MobileApp" />
            <span className="opcion">Mobile</span>
          </label>
          <label htmlFor="DeskApp">
            <input type="radio" name="categoria" id="DeskApp" />
            <span className="opcion">Desk</span>
          </label>
        </div>

        <div className="grid">
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/logo/webDesign.jpg"
                alt="Web Design"
              />
            </a>
            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="className">Diseño web</p>
              </div>
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/logo/webDesign.jpg"
                alt="Web Design"
              />
            </a>
            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="className">Diseño web</p>
              </div>
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/logo/webDesign.jpg"
                alt="Web Design"
              />
            </a>
            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="className">Diseño web</p>
              </div>
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/logo/webDesign.jpg"
                alt="Web Design"
              />
            </a>
            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="className">Diseño web</p>
              </div>
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/logo/webDesign.jpg"
                alt="Web Design"
              />
            </a>
            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="className">Diseño web</p>
              </div>
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trabajos;
