export const UserDashboard = () =>{

    return(
        <div className='grid place-items-center min-h-screen'>
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-5" >

            <div>
                <img className="m-5" src='' alt="Perfil"/>
            </div>
            
            <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3' >Your Nome</label>
                <label className=' rounded w-full py-3 px-3 text-gray-700 bg-branco'>João victor Nunes dos Santos</label>
            </div>
            <div className='mb-6 px-4'>
                <label className='flex gap-2 text-gray-700 text-sm text-left font-bold mb-2 py-3'>Your Email</label>
                <label className=' rounded w-full py-3 px-3 text-gray-700 bg-branco'>jvictornunes1012@gmail.com</label>
            </div>
        </div>
        </div>
    )

}

export default UserDashboard; 