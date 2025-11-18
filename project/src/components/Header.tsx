import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="gradient-bg text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +57 317 4017277
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                pedidos@comercializadoragm.com
              </span>
            </div>
            <div className="hidden md:block">
              <span>🚗 Repuestos para vehiculos - Expertos desde 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/G&M Rojo logo 2025.png" 
              alt="GYM SAS Logo" 
              className="h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Productos
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Servicios
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/products" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </Link>
            
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="hidden md:inline text-gray-700">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn-primary text-white px-4 py-2 rounded-lg font-medium">
                Iniciar Sesión
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Productos
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Servicios
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Nosotros
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;