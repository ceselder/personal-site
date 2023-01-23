import React from 'react'
import Navbar from '../../components/Navbar'

export default function Blog() {
  return (
    <>
    <Navbar />
      <div className='h-screen pt-8 bg-pink-100'>
        <div className='flex flex-col justify-center items-center'>
        
        <div className='grid grid-cols-2 gap-10'>
            <div className='h-64 w-[30rem] transition duration-200 hover:-translate-y-2 hover:cursor-pointer hover:bg-pink-300 bg-pink-200 rounded-2xl'>
                <div className='flex flex-row mt-8 mx-8'>
                    <img src="/img/twitter.png" className='h-32 object-cover bg-white rounded-2xl' />
                    <div className='mx-4 text-3xl font-bold'>
                        Why twitter is cancer and how to fix it
                    </div>
                </div>
                <div className='mx-8 mt-2 text-gray-400'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum 
                </div>
                
            </div>
            <div className='h-64 w-96 bg-pink-200 rounded-2xl'>

            </div><div className='h-64 w-96 bg-pink-200 rounded-2xl'>

</div>
        </div>

        </div>
        
      </div>
      </>
  )
}
