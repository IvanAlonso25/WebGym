import '../styles/Card.css';
import { useHistory } from 'react-router-dom';

function Card() {
    const history = useHistory();

    const comprarAppWeb = () => {
        history.push('./Comprar');
    }

    const comprarNutricion = () => {
        alert('Has comprado el asesoramiento nutricional');
    }

    const comprarAppWebAndNutricion = () => {
        alert('Has comprado la app web y el asesoramiento nutricional');
    }

    const comprarAsesorias = () => {
        alert('Has comprado las asesorias');
    }

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
                    <button className="btnComprar" onClick={comprarAppWeb}>Comprar <strong>(50€ / mes)</strong></button>
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
                    <button className="btnComprar" onClick={comprarNutricion}>Comprar <strong>(100€ / mes)</strong></button>
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
                    <button className="btnComprar" onClick={comprarAppWebAndNutricion}>Comprar <strong>(120€ / mes)</strong></button>
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
                    <button className="btnComprar" onClick={comprarAsesorias}>Comprar <strong>(300€ / mes)</strong></button>
                </div>
            </div>
        </>
    )
}

export { Card };