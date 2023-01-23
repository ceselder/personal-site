import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <div className='h-screen pt-8 bg-pink-100'>
      <Component {...pageProps} />
    </div>

  </>
}

export default MyApp
