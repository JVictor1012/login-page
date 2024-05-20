import LoginCard from './components/loginCard'
import Navbar from './components/NavBar';
import UserDashboard from "./components/UserDashboard"
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LoginCard />}></Route>
                <Route path="/dashboard" element={<UserDashboard />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;