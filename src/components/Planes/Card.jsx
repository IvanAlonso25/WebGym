import '../../styles/Card.css';
import '../../styles/Botons.css'

import { Link } from '../Link';

export function Card() {
    return (
        <>
            <div className='titulo'>
                <h2>PLANES</h2>
            </div>
            <div className="plans">
                <div className="card">
                    <div>
                        <h1>APP WEB</h1>
                    </div>
                    <div>
                        <img src="" alt="app web" />
                        <p>Acceso a la app de entrenamiento con seguimiento de progreso y asesoramiento.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/AppWeb">MAS INFO</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>NUTRICION</h1>
                    </div>
                    <div>
                        <img src="" alt="nutricion" />
                        <p>Asesoramiento nutricional personalizado y seguimiento de progreso.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/Nutricion">MAS INFO</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>APP WEB + NUTRICION</h1>
                    </div>
                    <div>
                        <img src="" alt="app web + nutricion" />
                        <p>Acceso a la app de entrenamiento y asesoramiento nutricional personalizado.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/AppWebNutricion">MAS INFO</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>ASESORIAS</h1>
                    </div>
                    <div>
                        <img src="" alt="asesorias" />
                        <p>Acceso a la app de entrenamiento y asesoramiento nutricional personalizado.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/Asesorias">MAS INFO </Link>
                    </div>
                </div>
            </div>
        </>
    )
}