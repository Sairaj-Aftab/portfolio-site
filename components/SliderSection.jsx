import React from 'react'

const SliderSection = () => {
  return (
    <div className='md:p-0 px-3 h-[100vh] flex flex-col justify-center'>
        <div className="wraper">
            <div className="img-div">
                <img className='rounded-full w-52 h-52 object-cover mx-auto' src="https://pbs.twimg.com/profile_images/1534982764772347904/dvgipluy_400x400.jpg" alt="" />
            </div>
            <div className='text-center font-semibold -tracking-tighter pt-2'>Full Stack Web Developer</div>
            <div className='text-center font-semibold -tracking-tighter pb-2'>With MERN</div>
            <div className="title text-center font-semibold text-4xl pb-2">Hi! This is Sairaj Aftab</div>
            <div className="navbar-link pt-2">
                <ul className='flex justify-center gap-2 font-semibold uppercase text-sm'>
                    <li className='bg-slate-600 py-1 px-2 rounded-md'><a href="#">Home</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md'><a href="#">Portfolios</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md'><a href="#">About</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md'><a href="#">Contact</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md'><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SliderSection