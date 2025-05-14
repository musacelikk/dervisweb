import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }

    const handleComplete = () => {
      // Minimum 1 saniye yükleme süresi
      setTimeout(() => {
        setLoading(false)
      }, 700)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return <>
    <Head>
    </Head>
    {loading && (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/IMG_8681-removebg-preview.png" 
                alt="Derviş Logo" 
                className="w-[100px] h-[100px] object-contain" 
              />
            </div>
          </div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Derviş Yükleniyor...</p>
        </div>
      </div>
    )}
    <Component {...pageProps} />
  </>
} 