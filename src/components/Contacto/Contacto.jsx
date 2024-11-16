import '../../styles/Contacto.css';

export function Contacto() {
    return (
        <>
            <div className="form">
                <h1>Contacto</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div>
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div>
                        <input type="text" placeholder="Asunto" />
                    </div>
                    <div>
                        <textarea placeholder="Mensaje"></textarea>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}