import './styles/App.css'
import './styles/Index.css'
import './styles/Footer.css';
import { HomePage } from './components/HomePage/HomePage';
import { Planes } from './components/Planes/Planes';
import { AppWeb } from './components/AppWeb/AppWeb';
import { useEffect, useState } from 'react'
import { EVENTS } from './js/consts'

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
    </>
  )
}

export default App
