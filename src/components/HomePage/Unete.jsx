import '../../styles/Unete.css';
import { validarMail } from '../../js/validarMail';

export function Unete() {


    const enviarSolicitud = () => {
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        if (nombre === '' || correo === '') {
            alert('Por favor, llena todos los campos');
            return;
        } else if (validarMail === false) {
            alert('Correo inválido');
        } else {
            alert('Solicitud enviada con éxito');
        }
    }

    return (
        <>
            <div className="container-global">
                <div className='container-form'>
                    <h2>Unete a nosotros</h2>
                    <form action="send-mail" className='form'>
                        <label htmlFor="nombre">Tu nombre</label>
                        <input id="nombre" type="text" required/>
                        <label htmlFor="correo">Correo diario</label>
                        <input id='correo' type="mail" required/>
                    </form>
                    <button id='btnEnviar' onClick={enviarSolicitud}>Enviar</button>
                </div>
            </div>
        </>
    )
}  