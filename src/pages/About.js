export default function About() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Tentang Kami</h1>
                <div className="space-y-4 text-gray-600">
                    <p className="text-lg leading-relaxed">
                       MyStore adalah toko online yang berkomitmen menghadirkan produk berkualitas tinggi dengan pelayanan terbaik. Kami percaya setiap pelanggan berhak mendapatkan pengalaman belanja yang mudah, cepat, dan menyenangkan.
                    </p>
                    <p className="text-lg leading-relaxed">
                       Kami bekerja sama dengan berbagai brand terpercaya dan terus memperbarui koleksi agar pelanggan bisa menemukan apa pun yang mereka butuhkan dalam satu tempat.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">Kategori Unggulan</h3>
                    <ul className="space-y-2 text-primary-800">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Elektronik
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Pakaian
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Alat Tukang
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Kecantikan
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Keunggulan</h3>
                    <ul className="space-y-2 text-blue-800">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Terjamin Kualitasnya
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Harga Terjangkau
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Cepat dan Aman
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Layanan Pelanggan Responsif
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}