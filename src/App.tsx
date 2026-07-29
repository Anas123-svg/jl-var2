import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Socials from './pages/Socials'
import Events from './pages/Events'
import Press from './pages/Press'
import Header from './components/Header'

/** Resets scroll position on route change. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/press" element={<Press />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}
