import LoginCard from './components/loginCard'
import Navbar from './components/NavBar';
import UserDashboard from "./components/UserDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/login-page" element={<LoginCard />}></Route>
                <Route path="/dashboard" element={<UserDashboard />}></Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;