import '../../styles/AppWeb.css'
import '../../styles/Botons.css'

import { Link } from '../Link';
import bienCara from '../../resources/bienCara.jpg'

export function AppWeb() {
  return (
    <>
      <div className='app-grid'>
        <div className='text-column'>
          <div>
            <h2>Los mejores entrenamientos agrupados por músculos</h2>
            <h3>Este plan incluye:</h3>
            <p>✅ Acceso a la app durante 12 meses </p>
            <p>✅ Actualización de los entrenamientos cada mes </p>
            <p>✅ Ejercicios guiados con una serie de videos y explicaciones </p>
            <p>✅ Disponible para IOS y Android </p>
            <p>✅ Nos encanta ver cómo se sienten más seguros de sí mismos. </p>
          </div>
          <div className='btnComprarEspecifico'>
            <Link to='/Comprar'>Comprar <strong>(30€ / año)</strong></Link>
          </div>
        </div>
        <div className='img-right'>
          <img src="" alt="imagen mia" />
        </div>
      </div>

    </>
  );
}