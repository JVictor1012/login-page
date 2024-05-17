import React from 'react';
import APIService from '../services/APIService';

class UserDashboard extends React.Component {
  state = {
    userData: {}
  };

  async componentDidMount() {
    try {

      const userData = await APIService.getData();

      this.setState({ userData });
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  }

  render() {
    const { userData } = this.state;

    return (
      <div className='grid place-items-center min-h-screen'>
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-5" >

          {userData && (
            <div>
              <div>
                <img className="m-5" src={userData.avatar.low} alt="Perfil"/>
              </div>
              
              <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3' >Your Name</label>
                <label className=' rounded w-full py-3 px-3 text-gray-700 bg-branco'>{userData.name}</label>
              </div>
              <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3'>Your Email</label>
                <label className=' rounded w-full py-3 px-3 text-gray-700 bg-branco'>{userData.email}</label>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserDashboard;
