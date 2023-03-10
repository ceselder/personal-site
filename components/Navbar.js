import React from 'react'
import NavbarLink from './NavbarLink'

export default function Navbar() {
  return (
    <div className='w-full px-4 h-20 py-2 flex bg-pink-200 flex-row justify-between items-center '>
        <div className='flex flex-row items-center'>
            <img className='rounded-full h-16' src="/img/madeline.png" />
            <h1 className='text-2xl font-bold'>sitename.tld</h1>
        </div>
        
        <div className='flex flex-row text-xl gap-x-12 mr-12 justify-center'>
            <NavbarLink text={"Home"} link={"/"} />
            <NavbarLink text={"Blog"} link={"/blog"} />
            <NavbarLink text={"Resume"} link={"/resume"} />
        </div>
    </div>
  )
}
