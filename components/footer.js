import Link from "next/link";

export default function Footer()
{
    return (
        <footer className="bg-gradient-dark text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-10 row-gap-6 mb-14 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <div className="mr-4 mb-8 block cursor-pointer py-2 group">
                            <img 
                                src="ChatGPT Image 11 Nis 2025 10_31_43.png" 
                                alt="Derviş Plastik" 
                                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
                            />
                            <span className="ml-3 text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                                DERVİŞ PLASTİK
                            </span>
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-my-gray-light">
                                "Derviş Plastik olarak, plastik, cam ve kağıt ürünlerinde güvenilir hizmet sunuyoruz. Geniş ürün yelpazemizle, müşteri memnuniyetini her zaman ön planda tutuyoruz."
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-lg font-bold tracking-wide text-white border-b border-my-gray-light pb-2 inline-block">
                            İletişim
                        </p>
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-my-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+905352311726" className="text-my-gray-light hover:text-my-red transition-colors duration-200">
                                +90 530 921 12 97
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-my-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:dervisplastik@hotmail.com" className="text-my-gray-light hover:text-my-red transition-colors duration-200">
                                dervisplastik@hotmail.com
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-my-red mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-my-gray-light">
                                İmam Bakır mah, 664. Sk. No:72, 63040 Haliliye/Şanlıurfa
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-bold tracking-wide text-white border-b border-my-gray-light pb-2 inline-block">
                            Sosyal Medya
                        </p>
                        <div className="flex items-center mt-6 space-x-6">
                            <a 
                                href="https://www.instagram.com/dervis.ticaret/" 
                                target="_blank" 
                                className="text-my-gray-light hover:text-my-red transition-colors duration-200 transform hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.facebook.com/" 
                                target="_blank" 
                                className="text-my-gray-light hover:text-my-red transition-colors duration-200 transform hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse justify-between pb-8 lg:flex-row">
                    <div className="w-full flex h-[2px] mb-6">
                        <div className="w-1/3 h-[4px] bg-my-gold shadow-lg"></div>
                        <div className="w-1/3 h-[4px] bg-my-red"></div>
                        <div className="w-1/3 h-[4px] bg-my-siyah"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-my-gray-light">
                        © 2025 Derviş Plastik. Tüm hakları saklıdır.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/gizlilik" className="text-my-gray-light hover:text-my-red transition-colors duration-200">
                            Gizlilik Politikası
                        </Link>
                        <Link href="/kullanim-kosullari" className="text-my-gray-light hover:text-my-red transition-colors duration-200">
                            Kullanım Koşulları
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}