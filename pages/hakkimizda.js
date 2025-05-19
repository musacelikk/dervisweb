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
        <div className="relative py-24 bg-gradient-dark">
            <div className="absolute inset-0 bg-[url('/cphe.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-my-siyah via-transparent to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
                    Hakkımızda
                </h1>
                <p className="text-xl text-my-gray-light max-w-3xl mx-auto">
                Derviş Plastik olarak, müşterilerimize tek çatı altında aradıkları her şeyi bulabilecekleri bir ortam sunmayı hedefliyoruz.


                </p>
            </div>
        </div>

        {/* Vision Section */}
        <div className="py-24 bg-gradient-light">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-soft group">
                        <img 
                            src="oncephe.jpg" 
                            alt="Derviş Plastik Mağaza" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-my-siyah/50 to-transparent"></div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="bg-gradient-primary bg-clip-text text-transparent">Vizyonumuz</span>
                        </h2>
                        <p className="text-my-gray-dark mb-6">
                            Derviş Plastik olarak, plastik, cam ve kağıt ürünlerinde güvenilir bir marka olmayı hedefliyoruz. Müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunarak, sektörde öncü olmayı amaçlıyoruz.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Çeşitlilik</h3>
                                <p className="text-my-gray">Geniş Ürün Yelpazesi</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Uygun Fiyat</h3>
                                <p className="text-my-gray">Rekabetçi fiyatlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">Değerlerimiz</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-light p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-my-siyah">Müşteri Odaklılık</h3>
                        <p className="text-my-gray">Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak için çalışıyoruz.</p>
                    </div>
                    <div className="bg-gradient-light p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-my-siyah">Pratik Çözüm</h3>
                        <p className="text-my-gray">Aradığınızı tek bir noktada bulabileceğiniz bir alışveriş deneyimi sunuyoruz.</p>
                    </div>
                    <div className="bg-gradient-light p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-my-siyah">Yenilikçilik</h3>
                        <p className="text-my-gray">Sürekli kendimizi geliştiriyor ve yenilikleri takip ediyoruz.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Team Section */}
        <div className="py-24 bg-gradient-light">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">Yöneticiler</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                            <img 
                                src="/images/team1.jpg" 
                                alt="" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-my-siyah">Davut Çelik</h3>
                        <p className="text-my-red text-center mb-4">Satış Müdürü</p>
                        <p className="text-my-gray text-center">
                            Müşteri ilişkileri ve satış konusunda uzman Satış Müdürü ve İşletme Ortağı.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                            <img 
                                src="/images/team2.jpg" 
                                alt="" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-my-siyah">Murat Çelik</h3>
                        <p className="text-my-red text-center mb-4">Alım Müdürü</p>
                        <p className="text-my-gray text-center">
                        20 yılı aşkın sektör deneyimi ile Derviş Plastik'in Alış Müdürü ve İşletme Ortağı.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24">
            <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Instagram Sayfamıza Göz Atın!
                </h2>
                <p className="text-xl text-gray-100 mb-12">
                Siz de Ailemizin Bir Parçası Olun, Instagram Sayfamıza Bekliyoruz...
                </p>
                <Link 
                    href="https://www.instagram.com/dervis.ticaret/" 
                    className="inline-block bg-white text-gray-900 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                >
                    Instagram'ı Ziyaret Et
                </Link>
            </div>
        </div>

        <Footer />
    </>
}