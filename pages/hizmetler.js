import Link from "next/link"
import Head from "next/head"
import Header from '../components/header';
import Footer from '../components/footer';

export default function cozumler() {
    return <>
        <Header />
        <Head>
            <title>Derviş Plastik - Katagorilerimiz</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}
        <div className="relative h-[70vh]">
            <div className="absolute inset-0 bg-gray-900"></div>
            <div className="absolute inset-0 bg-[url('/d5eb8a30-b05e-4520-a11c-468ae49a50e6.png')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Katagorilerimiz
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light">
                        Birçok kategoride, sayısız seçenek bir arada!                    </p>
                    <div className="mt-12 flex gap-4 justify-center">
                        <Link 
                            href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        >
                            Yol Tarifi Al
                        </Link>
                        <Link 
                            href="tel:05309211297" 
                            className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition duration-300 transform hover:scale-105"
                        >
                            Hemen Ara
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* KAtagoriler */}
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Plastik ürünler */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="poşet.png" alt="Periyodik Bakım" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Plastik Ürünler</h3>
                        <p className="text-gray-600 mb-4">
                        Günlük hayatınızı kolaylaştıran pratik ve ekonomik plastik ürünler. Saklama kaplarından organizerlere geniş ürün yelpazesiyle hizmetinizdeyiz.                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                            Yol Tarifi Al →
                        </Link>
                    </div>
                </div>

                {/* cam ürünler */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="IMG_9437.png" alt="Motor Tamiri" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Cam Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Cam Ürünlerinde Geniş Seçenek, Güvenilir Markalar!                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                        Yol Tarifi Al →
                        </Link>
                    </div>
                </div>

                {/* temizlik ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="IMG_9439.png" alt="Oto Elektrik" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Temizlik Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Evinizi ve iş yerinizi hijyenik tutmak için etkili ve kaliteli temizlik ürünleri. Her ihtimale karşı kapsamlı çözümler.                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                        Yol Tarifi Al →
                        </Link>
                    </div>
                </div>

                {/* kağıt ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="ChatGPT Image 26 Nis 2025 15_37_19.png" alt="Fren Sistemi" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Kağıt Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Peçete, havlu, tabak ve daha fazlası... Hijyenik ve kullanışlı kağıt ürünlerle her ortamda pratik çözümler.                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                        Yol Tarifi Al →
                        </Link>
                    </div>
                </div>

                {/* poşet ürünleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="poşet.png" alt="Klima Bakımı" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Poşet Ürünleri</h3>
                        <p className="text-gray-600 mb-4">
                        Farklı boy ve türlerde dayanıklı poşet çeşitleriyle taşıma ve paketleme artık çok daha kolay.                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                        Yol Tarifi Al →
                        </Link>
                    </div>
                </div>

                {/* mutfak gereçleri */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="relative h-48">
                        <img src="ChatGPT Image 26 Nis 2025 15_42_01.png" alt="Kaporta & Boya" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 "></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Mutfak Gereçleri</h3>
                        <p className="text-gray-600 mb-4">
                        Mutfakta ihtiyaç duyduğunuz her şey burada! Hazırlık, pişirme ve saklama süreçlerinizi kolaylaştıran kullanışlı ürünler ile pratik çözümler.                        </p>
                        <Link href="/bizeulasin" className="text-red-600 hover:text-red-700 font-semibold">
                        Yol Tarifi Al →
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24">
            <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-gray-200"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                İster tekli, ister toptan: Alışverişin en doğru adresi!
                </h2>
                <p className="text-xl text-gray-700 mb-12">
                
                </p>
                <Link 
                   href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                 className="inline-block bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105"
                >
                 Mağazamıza Uğrayın
                </Link>

                <Link 
                 href="https://www.instagram.com/dervis.ticaret/" 
                 className="inline-block bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105 ml-4"
                >
                  Instagram'ı Ziyaret Et
                </Link>

            </div>
        </div>

        <Footer />
    </>
}