import { useEffect, useState } from 'react'

import './styles/Index.css'
import './styles/Footer.css';

import { EVENTS } from './js/consts'
import { HomePage } from './components/HomePage/HomePage';
import { Planes } from './components/HomePage/Planes';
import { AppWeb } from './components/AppWeb/AppWeb';
import { Nutricion } from './components/Nutricion/Nutricion';
import { AppWebNutricion } from './components/AppWebNutricion/AppWebNutricion';
import { Asesorias } from './components/Asesorias/Asesorias';
import { Contacto } from './components/Contacto/Contacto';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <>
      { currentPath === '/' && <HomePage /> }
      { currentPath === '/Planes' && <Planes /> }
      { currentPath === '/AppWeb' && <AppWeb /> }
      { currentPath === '/Nutricion' && <Nutricion /> }
      { currentPath === '/AppWebNutricion' && <AppWebNutricion /> }
      { currentPath === '/Asesorias' && <Asesorias /> }
      { currentPath === '/Contacto' && <Contacto /> }
    </>
  )
}

export default App
