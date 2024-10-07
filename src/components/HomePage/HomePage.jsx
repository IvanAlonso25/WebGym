import '../../styles/Home.css';

import { NavBar } from '../NavBar';
import { Home } from './Home';
import { Footer } from '../Footer';

export function HomePage() {
    return (
        <>
            <NavBar />
            <Home />
            <Footer />
        </>
    )
}