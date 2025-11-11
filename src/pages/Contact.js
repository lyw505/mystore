export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl border border-primary-100">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                            <a href="mailto:info@belajarreact.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                info@tempmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl border border-primary-100">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                            <a href="tel:081234567890" className="text-primary-600 hover:text-primary-700 transition-colors">
                                0812-3456-7890
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Jam Operasional</h3>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between">
                            <span className="font-medium">Senin - Jumat</span>
                            <span>09:00 - 17:00 WIB</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Sabtu</span>
                            <span>09:00 - 14:00 WIB</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Minggu</span>
                            <span className="text-gray-500">Tutup</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
