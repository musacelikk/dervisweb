import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <img 
                src="ChatGPT Image 11 Nis 2025 10_31_43.png" 
                alt="Derviş P" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="ml-3 text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                DERVİŞ PLASTİK
              </span>
            </Link>
           
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 rounded-lg hover:bg-my-gray-light transition-colors duration-200"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-my-gray-dark" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Hakkımızda
              </Link>
              <Link href="/hizmetler" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Hizmetler
              </Link>
              <Link href="/bizeulasin" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Bize Ulaşın
              </Link>
              <Link 
                href="tel:+905309211297" 
                className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                İletişime Geç
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Hakkımızda
              </Link>
              <Link href="/hizmetler" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Hizmetler
              </Link>
              <Link href="/bizeulasin" className="text-my-gray-dark hover:text-my-red font-medium transition-colors duration-200">
                Bize Ulaşın
              </Link>
              <Link 
                href="tel:+905309211297" 
                className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium text-center hover:shadow-hover transition-all duration-300"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Decorative Line */}
      <div className="w-screen flex">
        <div className="w-1/3 h-[4px] bg-my-gold shadow-lg"></div>
        <div className="w-1/3 h-[4px] bg-my-red"></div>
        <div className="w-1/3 h-[4px] bg-my-siyah"></div>
      </div>   
    </header>
  );
}
