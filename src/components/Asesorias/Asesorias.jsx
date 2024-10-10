import { Link } from '../Link';

export function Asesorias() {
    return (
        <>
            <div className="card">
                <h1>ASESORIAS</h1>
                <div>
                    <p>Plan totalmente personalizado exclusivamente para cada persona.</p>
                </div>
                <div>
                    <h1>Entrenamiento + Nutrición + Seguimiento</h1>
                </div>
                <div className="btnComprar">
                    <Link to="/Comprar">Comprar <strong>(300€ / mes)</strong></Link>
                </div>
            </div>
        </>
    )
}