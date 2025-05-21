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
            <div className="py-8 sm:py-12 md:py-16 bg-[#0e1422]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-[#0e1422] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-[#ad0203]/20 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                                onClick={() => setSelectedCategory(category)}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-[#ad0203] transition-colors duration-300">
                                    {category.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {category.description}
                                </p>
                            </div>
                        ))}
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