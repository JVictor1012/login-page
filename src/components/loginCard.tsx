import { useState } from 'react'
import B2BitLogo from '../assets/B2Bit Logo.png'
import APIService from '../services/APIService';
import { useNavigate } from 'react-router-dom'

export const loginCard = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      try {
        const response = await APIService.login(email, password)
        console.log(response)
        if (response.status === 200) { 
          navigate("/dashboard")
        }

      } catch (error) {
        console.error('Erro ao fazer login:', error);
        setError('Erro ao fazer login. Por favor, verifique seu login e senha.');
      }
      
    }

  
    return (
      <div className='grid place-items-center min-h-screen'>
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-5 bg-white">
          <img className="w-100% m-5" src={B2BitLogo} alt="Logo" />
          
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm text-left font-bold mb-2'>Login</label>
              <input 
                type='text' 
                className='shadow border rounded w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'
                value={email}
                onChange={handleEmailChange}/>
            </div>
  
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm text-left font-bold mb-2'>Senha</label>
              <input 
                type='password' 
                className='shadow border rounded w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'
                value={password}
                onChange={handlePasswordChange}/>
            </div>
            
            {error && <p className="text-red-500">{error}</p>}
  
            <div>
              <button className='bg-azul hover:bg-blue-900 w-full rounded-xl text-white px-3 py-3'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default loginCard;
  
