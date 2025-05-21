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
            description: "Geniş plastik ürün yelpazemizle ihtiyaçlarınıza çözüm sunuyoruz.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            products: [
                "Mutfak Gereçleri",
                "Saklama Kapları",
                "Temizlik Malzemeleri",
                "Bahçe Ürünleri",
                "Ev Eşyaları"
            ]
        },
        {
            id: 2,
            title: "Cam Ürünler",
            description: "Kaliteli cam ürünlerimizle evinize ve işyerinize değer katın.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            products: [
                "Mutfak Camları",
                "Süs Eşyaları",
                "Vazolar",
                "Bardaklar",
                "Sürahiler"
            ]
        },
        {
            id: 3,
            title: "Kağıt Ürünler",
            description: "Çevre dostu kağıt ürünlerimizle sürdürülebilir çözümler sunuyoruz.",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            products: [
                "Mutfak Kağıtları",
                "Temizlik Kağıtları",
                "Peçeteler",
                "Havlular",
                "Tuvalet Kağıtları"
            ]
        }
    ];

    return (
        <>
            <Head>
                <title>Hizmetlerimiz - Derviş Plastik</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {/* Hero Section */}
            <div className="relative pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-[#0e1422]">
                <div className="absolute inset-0 bg-[url('/cphe.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-float">
                        Hizmetlerimiz
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
                        20 yılı aşkın tecrübemizle plastik, cam ve kağıt ürünlerinde güvenilir çözüm ortağınız.
                    </p>
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

            {/* Modal */}
            {selectedCategory && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#0e1422] rounded-2xl p-6 sm:p-8 max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                {selectedCategory.title}
                            </h3>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                            {selectedCategory.description}
                        </p>
                        <div className="space-y-2 sm:space-y-3">
                            {selectedCategory.products.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 text-sm sm:text-base text-gray-400"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ad0203]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{product}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
    );
}