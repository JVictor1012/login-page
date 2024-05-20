import B2BitLogo from '../assets/B2Bit Logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem('accessToken')
    navigate('/')
  }


  const isDashboardPage = location.pathname === '/login-page/#/dashboard'

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-azul">
      <div className="flex items-center">
        <img className="h-5 mr-4" src={B2BitLogo} alt="B2Bit Logo" />
        {isDashboardPage && <Link to="/" className="text-right">Home</Link>}
      </div>

      {isDashboardPage && (
        <button className="rounded text-white font-semibold bg-red-700 px-5 py-1 mb-3" onClick={logout}>
          Sair
        </button>
      )}      
  </nav>
  )
}

export default Navbar;
