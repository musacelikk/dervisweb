import Link from "next/link"
import Head from "next/head"
import Header from '../components/header';
import Footer from '../components/footer';

export default function Hakkimizda() {
    return <>
        <Head>
            <title>Hakkımızda - Derviş Plastik</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {/* Hero Section */}
        <div className="relative pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-[#0e1422]">
            <div className="absolute inset-0 bg-[url('/cphe.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-float">
                    Hakkımızda
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
                    20 yılı aşkın tecrübemizle plastik, cam ve kağıt ürünlerinde güvenilir çözüm ortağınız.
                </p>
            </div>
        </div>

        {/* About Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-[#0e1422]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group order-2 md:order-1">
                        <img 
                            src="dıscephe.png" 
                            alt="Derviş Plastik Mağaza" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 md:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            <span className="text-[#ad0203]">Biz Kimiz?</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Derviş Plastik olarak, 20 yılı aşkın süredir müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmaktan gurur duyuyoruz. Geniş ürün yelpazemiz ve uzman kadromuzla, işletmenizin ve evinizin ihtiyaç duyduğu tüm plastik, cam ve kağıt ürünlerini tek bir adreste bulabilirsiniz.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            Modern mağaza altyapımız ve stok yönetim sistemimiz sayesinde, müşterilerimize hızlı ve güvenilir hizmet sunuyoruz. Kalite standartlarımızdan ödün vermeden, rekabetçi fiyatlarımızla sektörde öncü konumumuzu sürdürüyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Values Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-[#0e1422]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                    <span className="text-[#ad0203]">Değerlerimiz</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="bg-[#0e1422] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-[#ad0203]/20 transition-all duration-300 transform hover:scale-105 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#ad0203] transition-colors duration-300">Kalite</h3>
                        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            20 yılı aşkın tecrübemizle, müşteri memnuniyetini ön planda tutarak en yüksek kalite standartlarında hizmet veriyoruz.
                        </p>
                    </div>
                    <div className="bg-[#0e1422] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-[#ad0203]/20 transition-all duration-300 transform hover:scale-105 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#ad0203] transition-colors duration-300">Hız</h3>
                        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Hızlı ve güvenilir hizmet anlayışımızla yanınızdayız.
                        </p>
                    </div>
                    <div className="bg-[#0e1422] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-[#ad0203]/20 transition-all duration-300 transform hover:scale-105 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#ad0203] transition-colors duration-300">Güven</h3>
                        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Müşteri memnuniyeti odaklı çalışma prensibimizle güveninizi kazanıyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-8 sm:py-12 md:py-16">
            <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-[#0e1422]"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                    Siz de Ailemizin Bir Parçası Olun
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto">
                    Instagram sayfamızı takip ederek en yeni ürünlerimizden ve kampanyalarımızdan haberdar olun.
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
}