import Header from "./components/header/Header"
import './app.css'
import Hero from "./components/hero/Hero"
import MenuPage from "./pages/menu/Menu-page"
import Welcome from "./components/welcome/welcome"

import {Routes, Route, Outlet } from 'react-router-dom'
import From from "./components/from/From"
import Theand from "./components/theend/Theand"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<>
            <Hero />
            <Welcome />
            <From/>
            <Theand />
            </>} />
            <Route path="/" element={<MenuPage />} />
          </Route>
          </Routes>
          
        </div>
        )
 }

        export default App