import { Planes } from "../Planes/Planes";

import imgPrincipal from '../../resources/principal.jpg'

export function Home() {
    return (
        <>
            <div className="infoGeneral">
                <img src={imgPrincipal} alt="Imagen principal" />
                <h1>ActiveLife With Ivan</h1>
                <p>Una forma nueva de conocerte y mejorar tu vida, con la ayuda de un entrenador personal.</p>
                <p>Con ActiveLife podrás realizar ejercicios de diferentes tipos, desde ejercicios de calentamiento hasta ejercicios de alta intensidad.</p>
            </div>
            <div className="description">
                <h1>Descripción</h1>
                <p>WebGym es una aplicación web que te permite realizar ejercicios desde la comodidad de tu hogar.
                    Con WebGym podrás realizar ejercicios de diferentes tipos, desde ejercicios de calentamiento hasta ejercicios de alta intensidad.
                </p>
            </div>
            <div className="planes">
                <Planes />
            </div>
        </>
    )
}