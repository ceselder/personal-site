import React from 'react'

export default function Blog() {
  return (
    <>

        <div className='flex flex-col justify-center items-center'>
        
        <div className='grid grid-cols-2 gap-10'>
            <div className='h-[17rem] w-[32rem] transition duration-200 hover:-translate-y-2 hover:cursor-pointer hover:bg-pink-300 bg-pink-200 rounded-2xl'>
                <div className='flex flex-row mt-6 mx-6'>
                    <img src="/img/twitter.png" className='h-36 min-w-[12rem] object-cover bg-pink-100 rounded-2xl' />
                    <div className='mx-4 text-3xl line-clamp-4 font-bold'>
                        How kabouter wesley is a white supremacist symbol: a thread
                    </div>
                </div>
                <div className='mx-8 mt-2 text-gray-400 line-clamp-3'>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum 
                </div>
            </div>
            

        </div>

        </div>

      </>
  )
}
