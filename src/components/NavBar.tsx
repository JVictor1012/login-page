import B2BitLogo from '../assets/B2Bit Logo.png'

export const Navbar = () => {
    return (
      <nav className="bg-blue-900 p-4 w-full" >
        <div className="container w-full">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">
                <img className="h-5 object-contain" src={B2BitLogo} alt="Logo"/>
            </div>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Página Inicial</a></li>
              <li><a href="#" className="text-white">Sobre</a></li>
              <li><a href="#" className="text-white">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;
  