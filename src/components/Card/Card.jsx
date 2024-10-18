import '../../styles/Card.css';
import '../../styles/Botons.css'

import { Link } from '../Link';

export function Card() {
    return (
        <>
            <div className="plans">
                <div className="card">
                    <div>
                        <h1>1. APP</h1>
                    </div>
                    <div>
                        <p>Un plan de iniciación a los entrenamientos por tu cuenta pero con una guía de ejercicios para seguir una rutina.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/AppWeb">➔</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>2. NUTRICION</h1>
                    </div>
                    <div>
                        <p>Si tu objetivo es mantener una dieta sana y equilibrada, para poder ver los cambios físicos mas rapidamente,
                            este plan es el ideal para ti. 
                        </p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/Nutricion">➔</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>3. APP + NUTRICION</h1>
                    </div>
                    <div>
                        <p>Acceso a la app de entrenamiento y asesoramiento nutricional personalizado.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/AppWebNutricion">➔</Link>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>4. FOR YOU</h1>
                    </div>
                    <div>
                        <p>Acceso a la app de entrenamiento y asesoramiento nutricional personalizado.</p>
                    </div>
                    <div className="btnComprar">
                        <Link to="/Asesorias">➔</Link>
                    </div>
                </div>
            </div>
        </>
    )
}