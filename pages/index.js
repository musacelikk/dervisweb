import Head from "next/head"
import Link from "next/link"
import Header from '../components/header';
import Footer from '../components/footer';
import WelcomeScreen from '../components/WelcomeScreen';
import { useState } from 'react';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <Head>
        <title>Derviş Plastik - Şanlıurfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showWelcome && <WelcomeScreen onEnter={() => setShowWelcome(false)} />}
      <Header />

      {/* Hero Section */}
      <div className="relative h-[90vh] bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-float">
              Derviş Plastik 
              <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
                
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-my-gray-light mb-8">
              Plastik, cam ve kağıt ürünlerinde güvenilir çözüm ortağınız. Geniş ürün yelpazemizle hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/hizmetler" 
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-glow-red transition-all duration-300 transform hover:scale-105 text-center"
              >
                Katagorilerimizi Keşfedin
              </Link>
              <Link 
                href="/bizeulasin" 
                className="bg-gradient-light text-my-siyah px-8 py-4 rounded-full font-medium hover:shadow-hover transition-all duration-300 transform hover:scale-105 text-center"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gradient-light py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Kategorilerimiz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Cam Ürünleri</h3>
              <p className="text-my-gray">"Cam Ürünlerinde Geniş Seçenek, Güvenilir Markalar!"</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Plastik Ürünler</h3>
              <p className="text-my-gray">Günlük hayatınızı kolaylaştıran pratik ve ekonomik plastik ürünler. Saklama kaplarından organizerlere geniş ürün yelpazesiyle hizmetinizdeyiz.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Temizlik Ürünleri</h3>
              <p className="text-my-gray">Evinizi ve iş yerinizi hijyenik tutmak için etkili ve kaliteli temizlik ürünleri. Her ihtimale karşı kapsamlı çözümler.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Kağıt Ürünleri</h3>
              <p className="text-my-gray">Peçete, havlu, tabak ve daha fazlası... Hijyenik ve kullanışlı kağıt ürünlerle her ortamda pratik çözümler.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Poşet Ürünleri</h3>
              <p className="text-my-gray">Farklı boy ve türlerde dayanıklı poşet çeşitleriyle taşıma ve paketleme artık çok daha kolay.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-my-siyah">Mutfak Gereçleri</h3>
              <p className="text-my-gray">Mutfakta ihtiyaç duyduğunuz her şey burada! Hazırlık, pişirme ve saklama süreçlerinizi kolaylaştıran kullanışlı ürünler ile pratik çözümler.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Neden Derviş Plastik?</span>
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-my-gray-dark group-hover:text-my-siyah transition-colors duration-300">20+ yılı aşkın sektör deneyimi ve uzman kadro</span>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-my-gray-dark group-hover:text-my-siyah transition-colors duration-300">Geniş ürün yelpazesi ve modern mağaza altyapısı</span>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-my-gray-dark group-hover:text-my-siyah transition-colors duration-300">Hızlı, güvenilir ve şeffaf hizmet anlayışı</span>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-my-gray-dark group-hover:text-my-siyah transition-colors duration-300">Rekabetçi fiyatlar ve müşteri memnuniyeti garantisi</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-soft group">
              <img 
                src="dıscephe.png" 
                alt="Derviş Plastik Mağaza" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
            Instagram Sayfamıza Göz Atın!
          </h2>
          <p className="text-xl text-my-gray-light mb-12">
            Siz de Ailemizin Bir Parçası Olun, Instagram Sayfamıza Bekliyoruz...
          </p>
          <Link 
            href="https://www.instagram.com/dervis.ticaret/" 
            className="inline-block bg-gradient-gold text-my-siyah font-bold py-4 px-12 rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Instagram'ı Ziyaret Et
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
