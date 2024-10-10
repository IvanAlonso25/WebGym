import '../styles/NavBar.css';
import { Link } from './Link';

import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';

import logo from '../resources/LogoCaptura.png';


export function NavBar() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li className="dropdown">
          PLANES ▼
          <ul className="dropdown-menu">
            <li>
              <Link to="/AppWeb">APP WEB</Link>
            </li>
            <li>
              <Link to="/Nutricion">NUTRICION</Link>
            </li>
            <li>
              <Link to="/AppWebNutricion">APP WEB + NUTRICION</Link>
            </li>
            <li>
              <Link to="/Asesorias">ASESORIAS</Link>
            </li>
          </ul>
        </li>
        <li className='btnContacto'>
          <Link to="/Contacto">CONTACTO</Link>
        </li>
        <div className='rrss'>
          <div>
            <Link to="">
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
      </ul>
    </nav>
  );
}