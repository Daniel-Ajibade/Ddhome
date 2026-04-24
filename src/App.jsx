import './App.css'
import Navbar   from './Components/Navbar/Navbar'
import Hero     from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import About    from './Components/About/About'
import Contact  from './Components/Contact/Contact'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="app__footer">
        <p>
          © {new Date().getFullYear()} <span>Double D Home Health Care</span>. All rights reserved.
        </p>
        <p>Omi-Eran Road, Funfun, After Ayeni Junction — Osogbo, Nigeria</p>
      </footer>
    </div>
  )
}