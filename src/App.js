import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              MyStore
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-300'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/products" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                isActive('/products') || location.pathname.startsWith('/products/')
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-300'
              }`}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
