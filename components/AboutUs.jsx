import React from 'react'

const AboutUs = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center'>
        <div className="wraper w-[80%] m-auto">
            <div className="title text-center -tracking-tighter text-slate-400">About Me</div>
            <div className='flex gap-10'>
                <img className='w-64 h-auto rounded-md' src="https://pbs.twimg.com/media/Eq4ltZRVoAETo-8?format=jpg&name=4096x4096" alt="" />
                <div  className='flex flex-col justify-center'>
                    <div className="title text-lg font-medium mb-3">Here is a little background</div>
                    <div className='text-sm break-all leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad repudiandae nisi vero aperiam! Asperiores provident deleniti recusandae facilis nam soluta sunt aspernatur tenetur. Perspiciatis consectetur unde sapiente soluta voluptatum asperiores quam animi excepturi natus nam, accusamus voluptas ullam incidunt vel doloribus a laborum perferendis dolores quisquam est laudantium enim.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;