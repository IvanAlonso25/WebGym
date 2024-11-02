import { Link } from "../Link";

export function AppWebNutricion() {
    return (
        <>
            <h1>APP + NUTRICION</h1>
            <div className="card">
                <h3>Con este plan tendrás acceso a la app y también a la nutrición mensual</h3>

                <div className="btnComprar">
                    <Link to="/Comprar">Comprar <strong>(120€ / mes)</strong></Link>
                </div>
            </div>
        </>
    );
}