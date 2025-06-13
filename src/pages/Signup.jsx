import React from 'react'

function Signup() {
  return (
    <div className='w-[100vh] h-[100vh]  ml-[400px] flex items-center justify-center'>
        <form action="" className='max-w-[900px] w-[80%] h-[500px] flex items-center justify-center  flex-col md:items-start gap-[10px] '>
            <h1 className='text-[30px] text-black '>Welcome to Locanest</h1>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]' >
 <label htmlFor="name" className='text-[20px]'>Username</label>
 <input type="text" id='name' className='w-[90%] h-[40px] border-[2px] border-gray-300 rounded-lg text-[15px] px-[20px]'/>
            </div>
             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
 <label htmlFor="email" className='text-[20px]'>email</label>
 <input type="text" id='email' className='w-[90%] h-[40px] border-[2px] border-gray-300 rounded-lg text-[15px] px-[20px]'/>
            </div>
             <div  className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
 <label htmlFor="password" className='text-[20px]'>Password</label>
 <input type="text" id='password' className='w-[90%] h-[40px] border-[2px] border-gray-300 rounded-lg text-[15px] px-[20px]'/>
            </div>
           
<button className='px-[30px]  py-[8px] bg-red-600  text-white text-[18px] rounded-lg'>Signup</button>
        </form>
    </div>
  )
}

export default Signup