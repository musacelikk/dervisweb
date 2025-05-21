import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress yapılandırması
NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
      NProgress.start()
    }

    const handleStop = () => {
      setTimeout(() => {
        setLoading(false)
      }, 700)
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    handleStart()
    handleStop()

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return <>
    <Head>
    </Head>
    {loading && (
      <div className="fixed inset-0 bg-[#0e1422]/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#ad0203]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/IMG_8681-removebg-preview.png" 
                alt="Derviş Logo" 
                className="w-16 h-16 object-contain" 
              />
            </div>
          </div>
          <p className="mt-6 text-2xl font-semibold text-white">Yükleniyor...</p>
        </div>
      </div>
    )}
    <Component {...pageProps} />
  </>
} 