import Head from "next/head"
import Link from "next/link"
import Header from '../components/header';
import Footer from '../components/footer';
import WelcomeScreen from '../components/WelcomeScreen';
import { useState } from 'react';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return <>
    <Head>
      <title>Derviş Plastik - Şanlıurfa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {showWelcome && <WelcomeScreen onEnter={handleEnter} />}
    
    {!showWelcome && <Header />}

    {/* Hero Section */}
<div className="relative h-screen">
  <div className="absolute inset-0">
    <img 
      src="4373DCA4-26AF-404D-8ECF-BF4ECF0C4864.JPG" 
      alt="Derviş Plastik Hero" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/50"></div>
  </div>
  <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">DERVİŞ</h1>
    <p className="text-2xl md:text-3xl mb-10 text-center font-light tracking-wide">
      Şanlıurfa'nın Toptan & Perakende Mağazası
    </p>
    <Link 
      href="/bizeulasin" 
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
    >
      Bize Ulaşın
    </Link>
  </div>
</div>
{/* Boşluk ekleyelim */}
<div className="h-20"></div> {/* 80px boşluk */}


    {/* Contact CTA */}
    <div className="bg-red-600 text-white py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">7/24 Uygun Fiyat, 365 Gün Kaçırılmayacak Fırsatlar!</h2>
        <p className="text-xl mb-8">"Hemen Mağazamızı Ziyaret Edin ve Farkı Yerinde Görün!"</p>
        <a 
          href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Mağazamıza Uğrayın
        </a>
      </div>
    </div>

    {/* Services Section */}
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kategorilerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Cam Ürünleri</h3>
            <p className="text-gray-600">"Cam Ürünlerinde Geniş Seçenek, Güvenilir Markalar!"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Plastik Ürünler</h3>
            <p className="text-gray-600">Günlük hayatınızı kolaylaştıran pratik ve ekonomik plastik ürünler. Saklama kaplarından organizerlere geniş ürün yelpazesiyle hizmetinizdeyiz.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Temizlik Ürünleri</h3>
            <p className="text-gray-600">Evinizi ve iş yerinizi hijyenik tutmak için etkili ve kaliteli temizlik ürünleri. Her ihtimale karşı kapsamlı çözümler.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Kağıt Ürünleri</h3>
            <p className="text-gray-600">Peçete, havlu, tabak ve daha fazlası... Hijyenik ve kullanışlı kağıt ürünlerle her ortamda pratik çözümler.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Poşet Ürünleri</h3>
            <p className="text-gray-600">Farklı boy ve türlerde dayanıklı poşet çeşitleriyle taşıma ve paketleme artık çok daha kolay.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-600 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Mutfak Gereçleri</h3>
            <p className="text-gray-600">Mutfakta ihtiyaç duyduğunuz her şey burada! Hazırlık, pişirme ve saklama süreçlerinizi kolaylaştıran kullanışlı ürünler ile pratik çözümler.</p>
          </div>
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Neden Derviş Plastik?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>20+ yılı aşkın sektör deneyimi ve uzman kadro</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Geniş ürün yelpazesi ve modern mağaza altyapısı</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Hızlı, güvenilir ve şeffaf hizmet anlayışı</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Rekabetçi fiyatlar ve müşteri memnuniyeti garantisi</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96">
            <img 
              src="2025-02-08.jpg" 
              alt="Derviş Plastik Mağaza" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
}
