import 'NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/plan">PLANES</a>
        </li>
        <li>
          <a href="/app">APP</a>
        </li>
        <li>
          <a href="/nutrition">NUTRICION</a>
        </li>
        <li>
          <a href="/appWeb">APP WEB + NUTRICION</a>
        </li>
        <li>
          <a href="/mentoring">ASESORIAS</a>
        </li>
        <li>
          <a href="/contact">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };