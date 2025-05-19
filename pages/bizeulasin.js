import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'
import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
            };

            await emailjs.send(
                'YOUR_SERVICE_ID', // EmailJS'den alacağınız Service ID
                'YOUR_TEMPLATE_ID', // EmailJS'den alacağınız Template ID
                templateParams,
                'YOUR_PUBLIC_KEY' // EmailJS'den alacağınız Public Key
            );

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return <>
        <Header />
        <Head>
            <title>Bize Ulaşın - Derviş Plastik</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDtSsscXoyS6P15HEkL-2aMPA0hoWbiDus&callback=initMap`}
            strategy="afterInteractive"
        />
        
        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-dark">
            <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-my-siyah via-transparent to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
                    Bize Ulaşın
                </h1>
                <p className="text-xl text-my-gray-light max-w-3xl mx-auto">
                    Sorularınız için bize ulaşın, en kısa sürede size dönüş yapalım.
                </p>
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
        <div className="py-24 bg-gradient-light">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-soft">
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="bg-gradient-primary bg-clip-text text-transparent">İletişim Formu</span>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-my-gray-dark mb-2">Adınız Soyadınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-my-red focus:ring-2 focus:ring-my-red/20 transition-all duration-300"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-my-gray-dark mb-2">E-posta Adresiniz</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-my-red focus:ring-2 focus:ring-my-red/20 transition-all duration-300"
                                    placeholder="E-posta Adresiniz"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-my-gray-dark mb-2">Telefon Numaranız</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-my-red focus:ring-2 focus:ring-my-red/20 transition-all duration-300"
                                    placeholder="Telefon Numaranız"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-my-gray-dark mb-2">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-my-red focus:ring-2 focus:ring-my-red/20 transition-all duration-300"
                                    placeholder="Mesajınız"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-primary text-white font-bold py-4 px-8 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-600 text-center">Mesajınız başarıyla gönderildi!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-soft">
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="bg-gradient-primary bg-clip-text text-transparent">İletişim Bilgileri</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-my-siyah mb-2">Telefon</h3>
                                        <p className="text-my-gray">+90 542 487 32 02</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-my-siyah mb-2">E-posta</h3>
                                        <p className="text-my-gray">dervisplastik@hotmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-my-siyah mb-2">Adres</h3>
                                        <p className="text-my-gray">Şanlıurfa, Türkiye</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-8 rounded-2xl shadow-soft">
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="bg-gradient-primary bg-clip-text text-transparent">Konum</span>
                            </h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.1234567890123!2d38.8127832!3d37.1580979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1534715b2470ccbf%3A0xb293a52ed7617e50!2sDERV%C4%B0%C5%9E%20T%C4%B0CARET!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
}
  