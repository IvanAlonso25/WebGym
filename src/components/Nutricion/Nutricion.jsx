import '../../styles/Botons.css'
import '../../styles/Nutricion.css'

import { Link } from '../Link';

export function Nutricion() {
    return (
        <>
            <div className="title">
                <h1>NUTRICIÓN</h1>
            </div>
            <div className="grid-nutrition">
                <div className="grid-text">
                    <div>
                        <h2>¿Tienes una rutina de gimnasio y quieres empezar con una buena alimentación?</h2>
                        <h3>¡Entonces, este plan es perfecto para ti!</h3>
                    </div>
                    <h4>*La nutrición es lo mas importante dentro de un plan de entrenamiento*
                        <br /><strong>El 70% de los resultados llegan gracias a la nutrición</strong>
                    </h4>
                    <p>Con este plan obtendrás un plan dietético sano y equilibrado. <br />Para poder llegar al objetivo, es uno de los
                        puntos claves.
                    </p>
                    <div className="container">
                        <h3>Este plan incluye:</h3>
                        <ul>
                            <li>✅ Plan dietético sano y equilibrado</li>
                            <li>✅ Actualización de la dieta cada mes</li>
                        </ul>
                    </div>
                </div>
                <div className="two-box">
                    <div className="box-nutricion">
                        <h3>ALIMENTACIÓN</h3>
                        <p>Con la alimentación y el ejercicio físico, junto con un seguimiento y las herramientas necesarias conseguirás los resultados que buscas.</p>
                    </div>
                    <div className="box-nutricion">
                        <h3>DIETA</h3>
                        <p>Cada persona es diferente y por eso todos los ejercicios están preparados para hacerlos de forma segura y para todo el mundo.</p>
                    </div>
                    <div className="box-nutricion">
                        <h3>SEGUIMIENTO</h3>
                        <p>Con el seguimiento que te ofrezco podrás ver tus cambios y como vas evolucionando semana tras semana.</p>
                    </div>
                    <div className="box-nutricion">
                        <h3>RESULTADOS</h3>
                        <p>Mejorarás tu rendimiento en todos los aspectos, aprendiendo a descansar bien, junto con una alimentación saludable y ejercicio físico.</p>
                    </div>
                </div>
            </div>
            <div className="btnComprarEspecificoNutricion">
                <Link to="/Comprar">Comprar <strong>(30€ / mes)</strong></Link>
            </div>
        </>
    )
}