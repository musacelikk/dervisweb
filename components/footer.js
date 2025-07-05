import Link from "next/link";

export default function Footer()
{
    return (
        <footer className="bg-[#0e1422] text-white">
            <div className="h-1 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422]"></div>
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4 sm:space-y-6">
                        <Link href="/" className="flex flex-col items-start space-y-2 group">
                            <img 
                                src="ChatGPT Image 11 Nis 2025 10_31_43.png" 
                                alt="Derviş Plastik" 
                                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="text-2xl font-bold text-[#ad0203] group-hover:text-[#ad0203]/80 transition-colors duration-300">
                                DERVİŞ TİCARET
                            </span>
                        </Link>
                        <p className="text-sm sm:text-base text-gray-400 text-left">
                        20 yılı aşkın tecrübemizle plastik, cam, kağıt, temizlik, ambalaj ve züccaciye ürünlerinde güvenilir çözüm ortağınız.                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl font-bold text-[#ad0203]">İletişim Bilgileri</h3>
                        <div className="space-y-2 sm:space-y-3">
                            <p className="text-sm sm:text-base text-gray-400">
                                <span className="text-white">Adres:</span> İmam Bakır, 664 Sk No:72, 63040 Haliliye/Şanlıurfa
                            </p>
                            <p className="text-sm sm:text-base text-gray-400">
                                <span className="text-white">Telefon:</span> 0 (530) 921 12 97
                            </p>
                            <p className="text-sm sm:text-base text-gray-400">
                                <span className="text-white">E-posta:</span> dervisplastik@hotmail.com
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl font-bold text-[#ad0203]">Sosyal Medya</h3>
                        <div className="flex space-x-4">
                            <Link 
                                href="https://www.instagram.com/dervis.ticaret/" 
                                className="text-gray-400 hover:text-[#ad0203] transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-800 text-center">
                    <p className="text-sm sm:text-base text-gray-400">
                        © {new Date().getFullYear()} Derviş Plastik. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}