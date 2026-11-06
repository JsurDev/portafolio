import "../componentes/Modal.css";

const Modal = () => {
  return (
    <>
      <div className="overlay" id="overlay">
        <div className="modal">
          <button className="boton-cerrar" id="btn-cerrar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </button>

          <div className="grid">
            <div className="thumb">
              <img src="./assets/logo/1.png" alt="" />
            </div>
            <div className="info">
              <div className="head">
                <h3 className="titulo">Trabajo 1</h3>
                <span className="categoria">Categoria 1</span>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat quia eos similique consequatur tenetur deleniti
                  architecto odit magnam. Suscipit blanditiis nihil obcaecati
                  facilis ex saepe accusantium iste debitis dolore architecto.
                </p>
                <img src="./assets/logo/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
