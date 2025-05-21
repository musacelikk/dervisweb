import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0e1422]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="h-1 bg-gradient-to-r from-[#ad0203] via-[#ad0203] to-[#0e1422]"></div>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <img 
                            src="ChatGPT Image 11 Nis 2025 10_31_43.png" 
                            alt="Derviş Plastik" 
                            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                            Ana Sayfa
                        </Link>
                        <Link href="/hizmetler" className="text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                            Katagorilerimiz
                        </Link>
                        <Link href="/hakkimizda" className="text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                            Hakkımızda
                        </Link>
                        <Link href="/bizeulasin" className="text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                            Bize Ulaşın
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white hover:text-[#ad0203] transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-[#0e1422]/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
                        <nav className="py-4 px-4 space-y-4">
                            <Link href="/" className="block text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                                Ana Sayfa
                            </Link>
                            <Link href="/hizmetler" className="block text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                                Katagorilerimiz
                            </Link>
                            <Link href="/hakkimizda" className="block text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                                Hakkımızda
                            </Link>
                            <Link href="/bizeulasin" className="block text-white hover:text-[#ad0203] transition-colors duration-300 text-sm sm:text-base">
                                Bize Ulaşın
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
