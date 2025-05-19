import Link from "next/link"
import Head from "next/head"
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';

export default function Hizmetler() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            id: 1,
            title: "Plastik Ürünler",
            description: "Günlük hayatınızı kolaylaştıran pratik ve ekonomik plastik ürünler. Saklama kaplarından organizerlere geniş ürün yelpazesiyle hizmetinizdeyiz.",
            image: "/plastik.png",
            items: [
                "Saklama kapları ve kutular",
                "Mutfak organizeri ürünleri",
                "Banyo ve ev gereçleri",
                "Çöp kovaları ve poşetlikler",
                "Bahçe ve dış mekan ürünleri"
            ]
        },
        {
            id: 2,
            title: "Cam Ürünleri",
            description: "Cam Ürünlerinde Geniş Seçenek, Güvenilir Markalar!",
            image: "/cam.png",
            items: [
                "Su bardakları ve bardak setleri",
                "Mutfak cam ürünleri",
                "Cam saklama kapları",
                "Özel tasarım cam ürünler",
                "Cam süs eşyaları"
            ]
        },
        {
            id: 3,
            title: "Temizlik Ürünleri",
            description: "Evinizi ve iş yerinizi hijyenik tutmak için etkili ve kaliteli temizlik ürünleri. Her ihtimale karşı kapsamlı çözümler.",
            image: "/temizlik.png",
            items: [
                "Genel temizlik ürünleri",
                "Mutfak temizleyicileri",
                "Banyo temizleyicileri",
                "Zemin temizleyicileri",
                "Cam temizleyicileri"
            ]
        },
        {
            id: 4,
            title: "Kağıt Ürünleri",
            description: "Peçete, havlu, tabak ve daha fazlası... Hijyenik ve kullanışlı kağıt ürünlerle her ortamda pratik çözümler.",
            image: "/ChatGPT Image 26 Nis 2025 15_37_19.png",
            items: [
                "Tuvalet kağıtları",
                "Kağıt havlu ve peçeteler",
                "Kağıt tabak ve bardaklar",
                "Mutfak kağıtları",
                "Kağıt ürün setleri"
            ]
        },
        {
            id: 5,
            title: "Poşet Ürünleri",
            description: "Farklı boy ve türlerde dayanıklı poşet çeşitleriyle taşıma ve paketleme artık çok daha kolay.",
            image: "/poset.png",
            items: [
                "Alışveriş poşetleri",
                "Çöp poşetleri",
                "Buzdolabı poşetleri",
                "Dondurucu poşetleri",
                "Özel boyutlu poşetler"
            ]
        },
        {
            id: 6,
            title: "Mutfak Gereçleri",
            description: "Mutfakta ihtiyaç duyduğunuz her şey burada! Hazırlık, pişirme ve saklama süreçlerinizi kolaylaştıran kullanışlı ürünler ile pratik çözümler.",
            image: "/ChatGPT Image 26 Nis 2025 15_42_01.png",
            items: [
                "Pişirme gereçleri",
                "Servis ürünleri",
                "Mutfak organizeri",
                "Mutfak Gereçleri",
                "Mutfak setleri"
            ]
        }
    ];

    return <>
        <Header />
        <Head>
            <title>Kategorilerimiz - Derviş Plastik</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-dark">
            <div className="absolute inset-0 bg-[url('/d5eb8a30-b05e-4520-a11c-468ae49a50e6.png')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-my-siyah via-transparent to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
                    Kategorilerimiz
                </h1>
                <p className="text-xl text-my-gray-light max-w-3xl mx-auto">
                    Birçok kategoride, sayısız seçenek bir arada!
                </p>
            </div>
        </div>

        {/* Categories Section */}
        <div className="py-24 bg-gradient-light">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl shadow-soft overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                            onClick={() => setSelectedCategory(category)}
                        >
                            <div className="relative h-64">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90">
                                    <h3 className="text-2xl font-bold text-my-siyah mb-2">{category.title}</h3>
                                    <p className="text-my-gray-dark">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Modal */}
        {selectedCategory && (
            <div className="fixed inset-0 bg-my-siyah/80 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="relative">
                        <img
                            src={selectedCategory.image}
                            alt={selectedCategory.title}
                            className="w-full h-64 object-contain"
                        />
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-4">{selectedCategory.title}</h2>
                        <p className="text-my-gray mb-8">{selectedCategory.description}</p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-my-siyah">Ürün Kategorileri</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedCategory.items.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-my-gray-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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