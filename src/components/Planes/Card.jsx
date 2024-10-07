import '../../styles/Card.css';

export function Card() {
    return (
        <>
            <div className="card">
                <div>
                    <h1>APP WEB</h1>
                </div>
                <div>
                    <img src="" alt="app web" />
                    <p>Acceso a la app de entrenamiento con seguimiento de progreso y asesoramiento.</p>
                </div>
                <div id='btnComprarAppWeb'>
                    <button className="btnComprar" onClick="">Comprar <strong>(50€ / mes)</strong></button>
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
                <div id='btnComprarNutricion'>
                    <button className="btnComprar" onClick="">Comprar <strong>(100€ / mes)</strong></button>
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
                <div id='btnComprarAppWebAndNutricion'>
                    <button className="btnComprar" onClick="">Comprar <strong>(120€ / mes)</strong></button>
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
                <div id='btnComprarAsesorias'>
                    <button className="btnComprar" onClick="">Comprar <strong>(300€ / mes)</strong></button>
                </div>
            </div>
        </>
    )
}