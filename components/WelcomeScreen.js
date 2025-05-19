import { useEffect, useState } from 'react';

export default function WelcomeScreen({ onEnter }) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleExit();
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [onEnter]);

    const handleExit = () => {
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 500); // Animasyon süresi
    };

    return (
        <div className={`fixed inset-0 bg-my-red z-[9999] flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center px-4">
                <img 
                    src="ChatGPT Image 11 Nis 2025 10_31_43.png" 
                    alt="Derviş Plastik Logo" 
                    className="w-48 h-48 mx-auto mb-8"
                />
                <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">
                    DERVİŞ PLASTİK
                </h1>
                <p className="text-xl text-white/90 mb-6 font-medium">
                    Kalite ve Güvenin Adresi
                </p>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    +20 yılı aşkın tecrübemizle plastik, cam ve kağıt vb. ürünlerinde sektörün öncü firması olarak hizmetinizdeyiz
                </p>
                <button
                    onClick={handleExit}
                    className="group relative bg-white text-my-red px-14 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <span className="relative z-10">Keşfet</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                </button>
                <p className="text-white/80 mt-6 text-sm">
                    
                </p>
            </div>
        </div>
    );
} 