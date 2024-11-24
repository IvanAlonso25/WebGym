import { Link } from '../Link';
import '../../styles/Asesorias.css';

export function Asesorias() {
    return (
        <>
            <div className='title'>
                <h1>ASESORIAS</h1>
            </div>
            <div>
                <div>
                    <h3>
                        ¿Quieres mejorar tu rendimiento deportivo? ¿Te gustaría tener un seguimiento personalizado y adaptado a tus necesidades? 
                        ¿Quieres mejorar tu alimentación y tus entrenamientos? 
                        Tenemos un plan perfecto para ti, con un seguimiento personalizado y adaptado a tus necesidades, nutrición personalizada y entrenamientos adaptados a ti.
                    </h3>
                </div>
            </div>
            <div className="btnComprarEspecificoNutricion">
                <Link to="/Comprar">Comprar <strong>(300€ / mes)</strong></Link>
            </div>
        </>
    )
}