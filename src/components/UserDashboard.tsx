import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import APIService from '../services/APIService'

const UserDashboard = () => {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    const verificaSessao = async () => {
      if (localStorage.getItem('accessToken')) {

        try {

          const data = await APIService.getData()
          setUserData(data)

        } catch (error) {
          console.error('Erro ao carregar dados do usuário:', error)
          navigate('/')
        }
      } else {
        navigate('/')
      }
    }

    verificaSessao()
  }, [navigate])


  return (
    <div className='grid place-items-center min-h-screen'>
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-5 bg-white">
          {userData && (
            <div>
              <label className='flex justify-center text-gray-700 text-sm text-left font-bold'>Imagem de Perfil</label>
              <div className='flex justify-center'>
                <img className="m-5 rounded-3xl" src={userData.avatar.low} alt="Perfil" />
              </div>
              <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3 w-full'>
                  Seu Nome
                </label>
                <div className='rounded w-full py-3 px-3 text-gray-700 bg-branco'>{userData.name}</div>
              </div>
              <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3 w-full'>
                  Seu Email
                </label>
                <div className='rounded w-full py-3 px-3 text-gray-700 bg-branco'>{userData.email}</div>
              </div>
            </div>
          )}
        </div>


      </div>
  )
}

export default UserDashboard;
