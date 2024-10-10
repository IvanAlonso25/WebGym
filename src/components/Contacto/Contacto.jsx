export function Contacto() {
    return (
        <>
            <div className="form">
                <h1>Contacto</h1>
                <form>
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div>
                        <label>Correo</label>
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div>
                        <label>Asunto</label>
                        <input type="text" placeholder="Asunto" />
                    </div>
                    <div>
                        <label>Mensaje</label>
                        <textarea placeholder="Mensaje"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}