import Link from "next/link"
import Head from "next/head"
import Header from '../components/header';
import Footer from '../components/footer';

export default function hakkimizda() {
    return <>
        <Header />
        <Head>
            <title>Derviş Plastik - Hakkımızda</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}
        <div className="relative h-[70vh]">
            <div className="absolute inset-0 bg-gray-900"></div>
            <div className="absolute inset-0 bg-[url('ChatGPT Image 26 Nis 2025 17_07_51.png')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Hakkımızda
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light">
                          Gönül Rahatlığıyla, Tereddütsüz Alışveriş! 
                    </p>
                    
                </div>
            </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Biz Kimiz?
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                    Derviş Plastik, 1998 yılında kurucumuz Davut Çelik’in girişimiyle küçük bir esnaf dükkanında faaliyete başlamıştır. Yıllar içinde edindiğimiz bilgi ve tecrübe ile büyüyerek bugün, ortağımız Murat Çelik ile birlikte sektörün güvenilir isimlerinden biri haline geldik. 27 yıllık tecrübemizle, plastik ve ambalaj sektöründe sağlam adımlarla ilerlemeye devam ediyoruz.                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed">
                    15 kişilik dinamik ve uzman kadromuzla müşteri memnuniyetini her zaman önceliğimiz olarak benimsiyoruz. Vizyonumuz; güven çerçevesinde uzun vadeli, kaliteli ilişkiler kurmak ve müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamaktır.
                    Her zaman "Tereddütsüz Alışveriş" anlayışıyla, hızlı çözüm ve sınırsız hizmet sunmaya devam ediyoruz.                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                            <h3 className="text-3xl font-bold text-red-600 mb-2">20+ Yıl</h3>
                            <p className="text-gray-600 text-lg">Sektör Deneyimi</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                            <h3 className="text-3xl font-bold text-red-600 mb-2">Sayısız</h3>
                            <p className="text-gray-600 text-lg">Mutlu Müşteri</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[600px] rounded-2xl overflow-hidden ">
                    <img 
                        src="dıscephe.png" 
                        alt="S&Y Otomotiv Atölye" 
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 "></div>
                </div>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                    Neden Bizi Tercih Etmelisiniz?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Güvenilir Hizmet</h3>
                        <p className="text-gray-600 text-lg">27 yıllık deneyimimizle, müşterilerimize her zaman söz verdiğimiz kaliteyi sunuyoruz. Alışveriş sürecinin her aşamasında şeffaf, dürüst ve güvenilir bir hizmet anlayışıyla yanınızdayız</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Hızlı ve Etkili Çözüm</h3>
                        <p className="text-gray-600 text-lg">İhtiyacınız olan ürünü veya hizmeti, minimum bekleme süresiyle sağlıyoruz. Sorunlara anında çözüm üretiyor, taleplerinizi en kısa sürede karşılıyoruz.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Esnek ve Kolay Ödeme Seçenekleri</h3>
                        <p className="text-gray-600 text-lg">Müşteri memnuniyetini desteklemek için farklı ödeme yöntemleri sunuyoruz. Esnek ödeme planlarımız ile alışverişinizi daha rahat ve sorunsuz bir şekilde tamamlayabilirsiniz.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Birebir İlgili Alışveriş Deneyimi</h3>
                        <p className="text-gray-600 text-lg">Satış öncesinde ve sonrasında her müşterimizle birebir ilgileniyor, özel ihtiyaçlarına en uygun çözümleri sunuyoruz. Kendinizi özel hissetmeniz için buradayız.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Geniş Ürün Yelpazesi</h3>
                        <p className="text-gray-600 text-lg">3000’den fazla ürün çeşidimizle, aradığınız her ürüne kolayca ulaşabilirsiniz. Hem çeşit hem de stok gücümüzle her zaman çözüm ortağınız olmaya hazırız.</p>
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