import '../../styles/Botons.css'

import { Link } from '../Link';

export function Nutricion() {
    return (
        <>
            <div className='card'>
                <h1>NUTRICION</h1>
                <div>
                    <p>Asesoramiento nutricional personalizado y seguimiento de progreso.</p>
                </div>
                <div>
                    <h1>FALTA TEXTO Y EXPLICACIÓN</h1>
                </div>
                <div className="btnComprar">
                    <Link to="/Comprar">Comprar <strong>(100€ / mes)</strong></Link>
                </div>
            </div>
        </>
    )
}