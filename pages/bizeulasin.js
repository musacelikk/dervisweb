import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'
import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useCallback, useEffect } from 'react';

const mapContainerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 37.1580979,  // Yeni konumun enlem değeri
    lng: 38.8153581   // Yeni konumun boylam değeri
};


const options = {
    styles: [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "on" }]
        }
    ],
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap',
    clickableIcons: true,
    zoom: 18
};

// Global scope'a initMap fonksiyonunu tanımlayalım
if (typeof window !== 'undefined') {
    window.initMap = function() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: center.lat, lng: center.lng },
            zoom: 17,
            styles: options.styles,
            disableDefaultUI: options.disableDefaultUI,
            zoomControl: options.zoomControl,
            mapTypeControl: options.mapTypeControl,
            streetViewControl: options.streetViewControl,
            fullscreenControl: options.fullscreenControl,
            mapTypeId: options.mapTypeId,
            clickableIcons: options.clickableIcons
        });
        
        const marker = new google.maps.Marker({
            position: { lat: center.lat, lng: center.lng },
            map: map,
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new google.maps.Size(40, 40),
                zIndex: 999
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="p-2">
                    <h3 class="font-bold text-lg mb-1">Derviş Plastik</h3>
                    <p class="text-gray-600 mb-2">İmam Bakır, 664. Sk. No:72, 63040 Haliliye/Şanlıurfa</p>
                    <div class="flex gap-2">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}" 
                           target="_blank" rel="noopener noreferrer" 
                           class="text-blue-600 hover:text-blue-800 text-sm">
                            Yol Tarifi Al
                        </a>
                    </div>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    };
}

export default function bizeulasin() {
    const [isOpen, setIsOpen] = useState(false);
    const [map, setMap] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Sayfa yüklendiğinde loading durumunu false yap
        setIsLoading(false);
    }, []);

    const onLoad = useCallback((map) => {
        setMap(map);
        // Haritayı merkeze odakla
        map.setZoom(17);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, []);

    const handleMarkerClick = () => {
        setIsOpen(true);
        if (map) {
            map.panTo(center);
            map.setZoom(18);
        }
    };

    return <>
        <Header />
        <Head>
            <title>Derviş Plastik - Bize Ulaşın</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDtSsscXoyS6P15HEkL-2aMPA0hoWbiDus&callback=initMap`}
            strategy="afterInteractive"
        />
        
        {/* Hero Section */}
        <div className="relative h-[70vh]">
            <div className="absolute inset-0 bg-gray-900"></div>
            <div className="absolute inset-0 bg-[url('/cphe.jpg')] bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundSize: '100% 100%', backgroundPosition: 'center center' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Bize Ulaşın
                    </h1>
                    <div className="mt-12 flex gap-4 justify-center">
                        <Link 
                            href="tel:+905424873202" 
                            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        >
                            Hemen Ara
                        </Link>
                        <Link 
                            href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8153581,17z/data=!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                            className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition duration-300 transform hover:scale-105"
                        >
                            Yol Tarifi Al
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Map Section */}
        <div className="w-full py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Bizi Ziyaret Edin</h2>
                </div>
                <div className="rounded-lg over shadow-lg">
                    {/* Google Maps bileşeni client-side'da yüklenecek */}
                    <div id="map" style={mapContainerStyle}></div>
                </div>
                
                {/* Yol Tarifi Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Toplu Taşıma</h3>
                        <p className="text-gray-600">Derviş Plastik'e Nasıl Giderim?</p>
                        <Link 
                            href="https://www.google.com/maps/dir/37.2018357,38.7192237/DERV%C4%B0%C5%9E+T%C4%B0CARET,+%C4%B0mam+Bak%C4%B1r,+664+Sk+No:72,+63040+Haliliye%2F%C5%9Eanl%C4%B1urfa/@37.1580694,38.7329566,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1534715b2470ccbf:0xb293a52ed7617e50!2m2!1d38.8153581!2d37.1580979!3e3?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                            className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition duration-300 transform hover:scale-105"
                        >
                        </Link>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Otopark</h3>
                        <p className="text-gray-600">Müşterilerimiz için ücretsiz otoparkımız mevcuttur.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
                        <p className="text-gray-600">Hafta içi: 08:30- Akşam Ezanı<br/>Hafta sonu: 8.30- Akşam Ezanı<br/>Pazar: Kapalı</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div>
                                    <h3 className="font-semibold">Adres</h3>
                                    <p className="text-gray-600">İmam Bakır, 664. Sk. No:72, 63040 Haliliye/Şanlıurfa</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div>
                                    <h3 className="font-semibold">Telefon</h3>
                                    <a href="tel:+905309211297" className="text-gray-600 hover:text-red-600">+90 530 921 12 97</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div>
                                    <h3 className="font-semibold">E-posta</h3>
                                    <a href="mailto:dervisplastik@hotmail.com" className="text-gray-600 hover:text-red-600">dervisplastik@hotmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Mesaj Gönderin</h2>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Adınız</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                                placeholder="Adınız Soyadınız"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">E-posta</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                                placeholder="ornek@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Mesajınız</label>
                            <textarea 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 h-32"
                                placeholder="Mesajınızı buraya yazın..."
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                        >
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </>
}
  