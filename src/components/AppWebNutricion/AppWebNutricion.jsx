import { Link } from "../Link";
import '../../styles/AppNutricion.css'
import '../../styles/Botons.css'

export function AppWebNutricion() {
    return (
        <>
            <div className="title">
                <h1>APP + NUTRICIÓN</h1>
            </div>
            <div className="body-columns">
                <div className="column-left">
                    <h2>Si quieres empezar con unos entrenamientos y una dieta sana y equilibrada, este es tu plan perfecto</h2>
                    <p>La nutrición y el ejercicio son pilares fundamentales para mantener una vida saludable.</p>
                    <p>Una dieta equilibrada proporciona los nutrientes necesarios para el correcto funcionamiento del cuerpo,
                        mientras que el ejercicio regular ayuda a mantener un peso adecuado, fortalecer los músculos
                        y mejorar la salud cardiovascular.</p>
                    <p><strong>Juntos, la nutrición y
                        el ejercicio pueden mejorar significativamente tu bienestar general y prevenir diversas enfermedades.</strong>
                    </p>
                </div>
                <div className="column-right">
                    <img src="" alt="comida" />
                    <img src="" alt="ejercicio" />
                    <img src="" alt="salud" />
                    <img src="" alt="descanso" />
                </div>
            </div>
            <hr />
            <div className="include-plan">
                <h3>Este plan incluye:</h3>
                <ul>
                    <li>✅ Acceso a la APP</li>
                    <li>✅ Entrenamientos todas las semanas</li>
                    <li>✅ Plan nutricional cada mes</li>
                </ul>
            </div>
            <div className="btnComprarEspecificoNutricion">
                <Link to="/Comprar">Comprar (100€ / año)</Link>
            </div>
        </>
    );
}