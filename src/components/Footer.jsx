import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';

export function Footer() {

    return (
        <footer>
            <div className="footer">
                <p>WebGym</p>
                <p>Página Web creada por Iván Alonso <a href="https://www.instagram.com/palontechsolutions/">
                        <Icon path={mdiInstagram}
                            title="User Profile"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                        />
                    </a> y con todos los derechos @2024</p>
            </div>
        </footer>
    )
}
