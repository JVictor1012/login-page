import B2BitLogo from '../assets/B2Bit Logo.png'

export const loginCard = () =>{

    return(
    <div className='grid place-items-center min-h-screen'>
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-5" >
        <img className="w-100% m-5" src={B2BitLogo} alt="Logo"/>
        
        <div className='mb-6'>
            <label className='block text-gray-700 text-sm text-left font-bold mb-2'>Login</label>
            <input type='text' className='shadow border rounded w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'></input>
        </div>
        <div className='mb-6'>
            <label className='block text-gray-700 text-sm text-left font-bold mb-2'>Senha</label>
            <input type='password' className='shadow border rounded w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'></input>
        </div>
        <div>
            <button className='bg-primary hover:bg-blue-900 w-full rounded-xl text-white px-3 py-3' >Sign in</button>
        </div>
        
    </div>
    </div>
    )

}

export default loginCard;