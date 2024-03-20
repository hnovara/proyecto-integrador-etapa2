import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Home from "../pages/Home"
import Alta from "../pages/Alta"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
// import NavBar from "../layout/Footer"

function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Alta />} />
                <Route path="/" element={<Contacto />} />
                <Route path="/" element={<Nosotros />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default RouterApp