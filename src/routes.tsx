import LoginCard from './components/loginCard'
import Navbar from './components/NavBar'
import UserDashboard from "./components/UserDashboard"
import { Routes, Route, BrowserRouter } from "react-router-dom"

export const AppRoutes = () =>{
    return(
        <BrowserRouter basename='/login-page'>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LoginCard />}></Route>
                <Route path="/dashboard" element={<UserDashboard />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;