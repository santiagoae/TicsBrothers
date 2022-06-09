import logo from "../../assets/TB SOLO.png";
import "../../styles/Nav.css";

const Nav = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-light navContenedor">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="logo"
            width="55px"
            height="44px"
            align="center"
          />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="/bienvenida" target="_blank">
              🎁​ Clase Gratis 🎁​
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ticsKahoot" target="_blank">
              👉​ Conoce Nuestro Curso 👈​​
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link"  href="/ticBlogs">
                TicBlogs
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
