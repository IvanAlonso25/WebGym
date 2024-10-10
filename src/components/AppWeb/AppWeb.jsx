import '../../styles/Botons.css'
import '../../styles/AppWeb.css'

import { Link } from '../Link';

export function AppWeb() {
  return (
    <>
      <div className='card'>
        <h1>APP WEB</h1>
        <div>
          <p>Acceso a la aplicación donde podrás ver todos los entrenamientos. Cada cirto tiempo se va actualizando con nuevos entrenamientos y
            rutinas de el ejercicio que desees. Además, podrás ver tu progreso y marcar tus objetivos.
          </p>
        </div>
        <div>
          <p>También te dará acceso a un canal privado de telegram donde te juntaras con todos los que tengan el mismo plan que tú.</p>
        </div>
        <h1>FALTA EXPLICACION</h1>
        <div className='btnComprar'>
          <Link to='/Comprar'>Comprar <strong>(50€ / mes)</strong></Link>
        </div>
      </div>

    </>
  );
}