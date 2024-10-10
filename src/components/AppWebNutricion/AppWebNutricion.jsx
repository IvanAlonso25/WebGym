import { Link } from "../Link";

export function AppWebNutricion() {
    return (
        <>
            <div className="card">
                <h1>APP WEB + NUTRICIÓN</h1>
                <div>
                    <p>Acceso a la app de entrenamiento y nutricion personalizado.</p>
                </div>
                <div>
                    <h1>FALTA TEXTO Y EXPLICACIÓN</h1>
                </div>
                <div className="btnComprar">
                    <Link to="/Comprar">Comprar <strong>(120€ / mes)</strong></Link>
                </div>
            </div>
        </>
    );
}