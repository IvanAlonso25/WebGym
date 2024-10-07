import '../styles/NavBar.css';
import { Link } from './Link';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./Planes">
            PLANES
          </Link>
        </li>
        <li>
          <Link to='/AppWeb'>
            APP
          </Link>
        </li>
        <li>
          <Link to='/Nutricion'>
            NUTRICION
          </Link>
        </li>
        <li>
          <Link to='/AppWebNutricion'>
            APP WEB + NUTRICION
          </Link>
        </li>
        <li>
          <Link to='/Asesorias'>
            ASESORIAS
          </Link>
        </li>
        <li>
          <Link to='/Contacto'>
              CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };