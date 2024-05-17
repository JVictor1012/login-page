import LoginCard from './components/loginCard'
import UserDashboard from "./components/UserDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginCard />}></Route>
                <Route path="/dashboard" element={<UserDashboard />}></Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;