import LoginCard from './components/loginCard'
import Navbar from './components/NavBar';
import UserDashboard from "./components/UserDashboard";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LoginCard />}></Route>
                <Route path="/login-page/dashboard" element={<UserDashboard />}></Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;