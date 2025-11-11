import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    
    const products = {
        1: {
            name: "Laptop Gaming Pro",
            price: "Rp 15.000.000",
            description: "Laptop gaming dengan performa tinggi yang dirancang untuk para gamer profesional dan content creator. Dilengkapi dengan prosesor terbaru dan kartu grafis powerful.",
            image: "https://i.pinimg.com/1200x/d2/9b/3a/d29b3aa938a999c788c6c8d004e300b8.jpg",
            specs: [
                "Processor: Intel Core i7-12700H",
                "RAM: 16GB DDR5",
                "Storage: 1TB NVMe SSD",
                "GPU: NVIDIA RTX 3070 8GB",
                "Display: 15.6\" FHD 144Hz",
                "OS: Windows 11 Pro"
            ],
            features: [
                "RGB Backlit Keyboard",
                "Advanced Cooling System",
                "Thunderbolt 4 Port",
                "Wi-Fi 6E Support"
            ]
        },
        2: {
            name: "Keyboard Mechanical RGB",
            price: "Rp 1.500.000",
            description: "Keyboard mechanical premium dengan switch berkualitas tinggi dan RGB lighting yang dapat dikustomisasi. Sempurna untuk gaming dan typing.",
            image: "https://i.pinimg.com/1200x/a2/87/41/a28741bfdad0cc3ad0e4aaa3ac02ec6d.jpg",
            specs: [
                "Switch Type: Cherry MX Red",
                "Layout: Full Size (104 Keys)",
                "Backlight: RGB Per-Key",
                "Connection: USB-C Wired",
                "Cable: Braided 1.8m",
                "Material: Aluminum Frame"
            ],
            features: [
                "Hot-Swappable Switches",
                "N-Key Rollover",
                "Programmable Macros",
                "Detachable USB-C Cable"
            ]
        },
        3: {
            name: "Mouse Gaming Wireless",
            price: "Rp 800.000",
            description: "Mouse gaming wireless dengan sensor presisi tinggi dan desain ergonomis. Memberikan performa maksimal untuk gaming kompetitif.",
            image: "https://i.pinimg.com/736x/8b/f2/66/8bf2662971bdab0cdc8708c2c78bdba3.jpg",
            specs: [
                "Sensor: Optical 25,600 DPI",
                "Connection: 2.4GHz Wireless + Bluetooth",
                "Battery: Up to 70 hours",
                "Buttons: 8 Programmable",
                "Weight: 80g",
                "RGB: 16.8M Colors"
            ],
            features: [
                "Ultra-Low Latency",
                "Adjustable DPI",
                "Onboard Memory",
                "USB-C Fast Charging"
            ]
        }
    };

    const product = products[id];

    if (!product) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk Tidak Ditemukan</h2>
                    <p className="text-gray-600 mb-6">Maaf, produk yang Anda cari tidak tersedia.</p>
                    <Link to="/products" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                        Kembali ke Daftar Produk
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-primary-600 transition-colors">Products</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
            </div>

            {/* Main Product Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Product Image */}
                    <div className="flex justify-center items-center bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            <div className="text-4xl font-bold text-primary-600 mb-6">
                                {product.price}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {product.description}
                            </p>
                            
                            <div className="flex gap-4 mb-6">
                                <button className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg">
                                    Beli Sekarang
                                </button>
                                <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                            <div className="flex items-center text-blue-800">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-medium">Garansi Resmi 1 Tahun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Spesifikasi</h3>
                    <ul className="space-y-3">
                        {product.specs.map((spec, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Fitur Unggulan</h3>
                    <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center">
                <Link 
                    to="/products" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Kembali ke Daftar Produk
                </Link>
            </div>
        </div>
    );
}
