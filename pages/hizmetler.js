import Link from "next/link"
import Head from "next/head"
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';

export default function cozumler() {
    const [isPlastikOpen, setIsPlastikOpen] = useState(false);
    const [isCamOpen, setIsCamOpen] = useState(false);
    const [isTemizlikOpen, setIsTemizlikOpen] = useState(false);
    const [isKagitOpen, setIsKagitOpen] = useState(false);
    const [isPosetOpen, setIsPosetOpen] = useState(false);
    const [isMutfakOpen, setIsMutfakOpen] = useState(false);

    return <>
        <Header />
        <Head>
            <title>Derviş Plastik - Katagorilerimiz</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}
        <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-gray-900"></div>
            <div className="absolute inset-0 bg-[url('/d5eb8a30-b05e-4520-a11c-468ae49a50e6.png')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-tight">
                        Kategorilerimiz
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 font-light mb-12">
                        Birçok kategoride, sayısız seçenek bir arada!
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                            className="bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 text-lg"
                        >
                            Yol Tarifi Al
                        </Link>
                        <Link 
                            href="tel:05309211297" 
                            className="bg-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition duration-300 transform hover:scale-105 text-lg"
                        >
                            Hemen Ara
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* KAtagoriler */}
        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Ürün Kategorilerimiz</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Geniş ürün yelpazemizle ihtiyacınız olan her şeyi tek bir adreste bulabilirsiniz.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Plastik ürünler */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="plastik.png" alt="Plastik Ürünler" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Plastik Ürünler</h3>
                        <p className="text-gray-600 mb-4">
                        Günlük hayatınızı kolaylaştıran pratik ve ekonomik plastik ürünler. Saklama kaplarından organizerlere geniş ürün yelpazesiyle hizmetinizdeyiz.                        </p>
                        <button 
                            onClick={() => setIsPlastikOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>

                {/* cam ürünler */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="cam.png" alt="Cam Ürünleri" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Cam Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Cam Ürünlerinde Geniş Seçenek, Güvenilir Markalar!                        </p>
                        <button 
                            onClick={() => setIsCamOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>

                {/* temizlik ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="temizlik.png" alt="Temizlik Ürünleri" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Temizlik Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Evinizi ve iş yerinizi hijyenik tutmak için etkili ve kaliteli temizlik ürünleri. Her ihtimale karşı kapsamlı çözümler.                        </p>
                        <button 
                            onClick={() => setIsTemizlikOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>

                {/* kağıt ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="ChatGPT Image 26 Nis 2025 15_37_19.png" alt="Kağıt Ürünleri" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Kağıt Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Peçete, havlu, tabak ve daha fazlası... Hijyenik ve kullanışlı kağıt ürünlerle her ortamda pratik çözümler.                        </p>
                        <button 
                            onClick={() => setIsKagitOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>

                {/* poşet ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="poset.png" alt="Poşet Ürünleri" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Poşet Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Farklı boy ve türlerde dayanıklı poşet çeşitleriyle taşıma ve paketleme artık çok daha kolay.                        </p>
                        <button 
                            onClick={() => setIsPosetOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>

                {/* mutfak gereçleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-64">
                        <img src="ChatGPT Image 26 Nis 2025 15_42_01.png" alt="Mutfak Gereçleri" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Mutfak Gereçleri</h3>
                        <p className="text-gray-600 mb-4">
                        Mutfakta ihtiyaç duyduğunuz her şey burada! Hazırlık, pişirme ve saklama süreçlerinizi kolaylaştıran kullanışlı ürünler ile pratik çözümler.                        </p>
                        <button 
                            onClick={() => setIsMutfakOpen(true)}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Detayları Gör →
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal Pencereler */}
        {/* Plastik Ürünler Modal */}
        {isPlastikOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsPlastikOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Plastik Ürünler</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Plastik ürünlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Saklama kapları ve kutular</li>
                            <li>Mutfak organizeri ürünleri</li>
                            <li>Banyo ve ev gereçleri</li>
                            <li>Çöp kovaları ve poşetlikler</li>
                            <li>Bahçe ve dış mekan ürünleri</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm ürünlerimiz kalite standartlarına uygun, dayanıklı ve kullanışlıdır.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* Cam Ürünler Modal */}
        {isCamOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsCamOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Cam Ürünleri</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Cam ürünlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Su bardakları ve bardak setleri</li>
                            <li>Mutfak cam ürünleri</li>
                            <li>Cam saklama kapları</li>
                            <li>Özel tasarım cam ürünler</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm cam ürünlerimiz kaliteli malzemeden üretilmiş olup, şık ve dayanıklıdır.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* Temizlik Ürünleri Modal */}
        {isTemizlikOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsTemizlikOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Temizlik Ürünleri</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Temizlik ürünlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Genel temizlik ürünleri</li>
                            <li>Mutfak temizleyicileri</li>
                            <li>Banyo temizleyicileri</li>
                            <li>Zemin temizleyicileri</li>
                            <li>Cam temizleyicileri</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm temizlik ürünlerimiz etkili ve güvenli formüllere sahiptir.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* Kağıt Ürünleri Modal */}
        {isKagitOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsKagitOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Kağıt Ürünleri</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Kağıt ürünlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Tuvalet kağıtları</li>
                            <li>Kağıt havlu ve peçeteler</li>
                            <li>Kağıt tabak ve bardaklar</li>
                            <li>Mutfak kağıtları</li>
                            <li>Kağıt ürün setleri</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm kağıt ürünlerimiz kaliteli ve ekonomik fiyatlarla sunulmaktadır.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* Poşet Ürünleri Modal */}
        {isPosetOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsPosetOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Poşet Ürünleri</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Poşet ürünlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Alışveriş poşetleri</li>
                            <li>Çöp poşetleri</li>
                            <li>Buzdolabı poşetleri</li>
                            <li>Dondurucu poşetleri</li>
                            <li>Özel boyutlu poşetler</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm poşet ürünlerimiz dayanıklı ve kaliteli malzemeden üretilmiştir.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* Mutfak Gereçleri Modal */}
        {isMutfakOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
                    <button 
                        onClick={() => setIsMutfakOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Mutfak Gereçleri</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Mutfak gereçlerimiz arasında:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Pişirme gereçleri</li>
                            <li>Servis ürünleri</li>
                            <li>Mutfak organizeri</li>
                            <li>Mutfak Gereçleri</li>
                            <li>Mutfak setleri</li>
                            <li>Ve Daha Fazlası...</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Tüm mutfak gereçlerimiz kullanışlı ve dayanıklıdır.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* CTA Section */}
        <div className="relative py-32">
            <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-gray-200"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    İster tekli, ister toptan: Alışverişin en doğru adresi!
                </h2>
                <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                    Kaliteli ürünler, uygun fiyatlar ve geniş ürün yelpazesiyle hizmetinizdeyiz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                        className="inline-block bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105 text-lg"
                    >
                        Mağazamıza Uğrayın
                    </Link>

                    <Link 
                        href="https://www.instagram.com/dervis.ticaret/" 
                        className="inline-block bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105 text-lg"
                    >
                        Instagram'ı Ziyaret Et
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
    </>
}