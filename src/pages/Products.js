import { Link } from "react-router-dom";

export default function Products() {
    const items = [
        { 
            id: 1, 
            name: "Laptop", 
            description: "Laptop gaming performa tinggi dengan spesifikasi terbaik",
            price: "Rp 15.000.000",
            image: "https://i.pinimg.com/1200x/d2/9b/3a/d29b3aa938a999c788c6c8d004e300b8.jpg"
        },
        { 
            id: 2, 
            name: "Keyboard", 
            description: "Keyboard mechanical RGB dengan switch premium",
            price: "Rp 1.500.000",
            image: "https://i.pinimg.com/1200x/a2/87/41/a28741bfdad0cc3ad0e4aaa3ac02ec6d.jpg"
        },
        { 
            id: 3, 
            name: "Mouse", 
            description: "Mouse gaming wireless dengan sensor presisi tinggi",
            price: "Rp 800.000",
            image: "https://i.pinimg.com/736x/8b/f2/66/8bf2662971bdab0cdc8708c2c78bdba3.jpg"
        },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Daftar Produk</h1>
                <p className="text-gray-600">Temukan produk-produk terbaik kami dengan kualitas premium</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Link 
                        key={item.id}
                        to={`/products/${item.id}`}
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary-600">
                                    {item.price}
                                </span>
                                <span className="text-primary-600 group-hover:translate-x-1 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}