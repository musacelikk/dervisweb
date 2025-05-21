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

export default function BizeUlasin() {
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
        <div className="relative pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-[#0e1422]">
            {/* Mobil ve tablet için görsel */}
            <div className="absolute inset-0 md:hidden bg-[url('/oncephe.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            {/* Masaüstü için görsel */}
            <div className="absolute inset-0 hidden md:block bg-[url('/cphe.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/80 to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-float">
                    İletişim Bilgilerimiz
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    20 yılı aşkın tecrübemizle plastik, cam ve kağıt ürünlerinde güvenilir çözüm ortağınız.
                </p>
            </div>
        </div>

        {/* Location Section */}
        <div className="w-full py-8 sm:py-12 bg-[#0e1422]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Bizi Ziyaret Edin</h2>
                    <p className="text-gray-400">Mağazamıza gelmeden önce bilmeniz gerekenler</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sol Taraf - Bilgiler */}
                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-4">Çalışma Saatleri</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Pazartesi - Cuma</span>
                                    <span className="text-white">08:00 - Akşam Ezanı</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Cumartesi</span>
                                    <span className="text-white">08:00 - Akşam Ezanı</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Pazar</span>
                                    <span className="text-white">Kapalı</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-4">Öne Çıkan Özellikler</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 text-[#ad0203] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Geniş Ürün Yelpazesi
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 text-[#ad0203] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Ücretsiz Otopark
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 text-[#ad0203] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Kolay Erişim
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Sağ Taraf - Konum Bilgisi */}
                    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-white mb-4">Konum Bilgisi</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-[#ad0203] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-white font-medium">Adres</p>
                                    <p className="text-gray-400">İmam Bakır, 664 Sk No:72, 63040 Haliliye/Şanlıurfa</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-[#ad0203] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-white font-medium">Telefon</p>
                                    <p className="text-gray-400">+0 (530) 921 12 97</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-[#ad0203] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-white font-medium">E-posta</p>
                                    <p className="text-gray-400">dervisplastik@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link 
                                href="https://www.google.com/maps/place/DERV%C4%B0%C5%9E+T%C4%B0CARET/@37.1580979,38.8127832,17z/data=!3m1!4b1!4m6!3m5!1s0x1534715b2470ccbf:0xb293a52ed7617e50!8m2!3d37.1580979!4d38.8153581!16s%2Fg%2F11h7ky1qv8?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-[#ad0203] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#ad0203]/80 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Google Maps'te Göster
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
}
  