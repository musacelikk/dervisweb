import { useEffect, useState } from 'react';
import Image from 'next/image';

const WelcomeScreen = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Üst yarım */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-700 to-red-600 transition-transform duration-1000 ease-in-out ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Animasyonlu arka plan efekti */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Alt yarım */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-700 to-red-600 transition-transform duration-1000 ease-in-out ${
          isExiting ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Animasyonlu arka plan efekti */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Buton Container */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
        isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        {/* Logo */}
        <div className="mb-12 relative w-64 h-64 animate-float">
          <Image
            src="/ChatGPT Image 11 Nis 2025 10_31_43.png"
            alt="Derviş Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Buton */}
        <button
          onClick={handleClick}
          className="group relative px-16 py-7 text-2xl font-bold text-white bg-transparent border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          {/* Buton arka plan efekti */}
          <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          
          {/* Buton metni */}
          <span className="relative z-10">Derviş'e Hoş Geldiniz</span>
        </button>

        {/* Alt metin */}
        <p className="mt-8 text-white/90 text-xl font-light tracking-wider animate-pulse">
          Keşfetmek için tıklayın
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen; 