import Head from "next/head"
import Link from "next/link"
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Derviş Plastik & Ticaret - Şanlıurfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] sm:min-h-screen bg-[#0e1422] pt-20 sm:pt-24 md:pt-28">
        <div className="absolute inset-0 bg-[url('/4373DCA4-26AF-404D-8ECF-BF4ECF0C4864.JPG')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 pt-24 sm:pt-20 md:pt-32 pb-12 sm:pb-20 md:pb-32 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-float">
            DERVİŞ PLASTİK
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
          20 yılı aşkın tecrübemizle plastik, cam, kağıt, temizlik, ambalaj ve züccaciye ürünlerinde güvenilir çözüm ortağınız.          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
              className="bg-[#ad0203] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#ad0203]/80 transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                Mağazamıza Uğrayın
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link 
              href="https://www.instagram.com/dervis.ticaret/" 
              className="bg-[#ad0203] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#ad0203]/80 transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                Instagram'ı Ziyaret Et
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-[#0e1422]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] bg-clip-text text-transparent">Neden Derviş Ticaret?</span>
              </h2>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#ad0203]/20 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">20+ yılı aşkın sektör deneyimi ve uzman kadro.</span>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#ad0203]/20 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">Geniş ürün yelpazemiz ve yılların deneyimiyle ihtiyaçlarınıza en uygun çözümleri sunuyoruz.</span>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#ad0203]/20 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">Hızlı, güvenilir ve şeffaf hizmet anlayışı.</span>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#ad0203]/20 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">Rekabetçi fiyatlar ve müşteri memnuniyeti garantisi.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group mt-8 md:mt-0">
              <img 
                src="dıscephe.png" 
                alt="Derviş Plastik Mağaza" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-[#0e1422]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-pulse">
            Instagram Sayfamıza Göz Atın!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Siz de Ailemizin Bir Parçası Olun, Instagram Sayfamıza Bekliyoruz...
          </p>
          <Link 
            href="https://www.instagram.com/dervis.ticaret/" 
            className="inline-block bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:shadow-lg hover:shadow-[#ad0203]/20 transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base"
          >
            <span className="flex items-center justify-center">
              Instagram'ı Ziyaret Et
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
