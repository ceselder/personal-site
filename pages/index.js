import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Navbar />
      <div className='h-screen pt-8 bg-pink-100'>
        <div className='flex flex-col justify-center items-center'>
        
        <h1 className='text text-2xl'>Celeste</h1>
        </div>
        
      </div>
    </>

  )
}
