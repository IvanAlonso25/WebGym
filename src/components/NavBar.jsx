import '../styles/NavBar.css';
import { Link } from './Link';

import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';

import imgPrincipal from '../resources/principal.jpg'

export function NavBar() {

  return (
    <header>
      <div className="infoGeneral">
        <img src={imgPrincipal} alt="Imagen principal" />
        <p>El único límite es el que tú mismo te impones</p>
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li className="dropdown">
                PLANES ▼
                <ul className="dropdown-menu">
                  <hr />
                  <li>
                    <Link to="/AppWeb">APP</Link>
                  </li>
                  <li>
                    <Link to="/Nutricion">NUTRICION</Link>
                  </li>
                  <li>
                    <Link to="/AppWebNutricion">APP + NUTRICION</Link>
                  </li>
                  <li>
                    <Link to="/Asesorias">ASESORIAS</Link>
                  </li>
                </ul>
              </li>
              <li className='btnContacto'>
                <Link to="/Contacto">CONTACTO</Link>
              </li>
            </ul>
          </div>

          <div className='rrss'>
            <div>
              <Link to="https://www.instagram.com/palontechsolutions/">
                <Icon path={mdiInstagram}
                  title="Instagram Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="#80ff00"
                />
              </Link>
            </div>
            <div>
              <Link to="">
                <Icon path={mdiYoutube}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="#80ff00"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
}