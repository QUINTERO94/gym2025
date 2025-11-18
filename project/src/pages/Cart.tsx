import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-600 mb-8">Descubre nuestros productos y comienza a comprar</p>
            <Link to="/products" className="btn-primary text-white px-8 py-3 rounded-lg font-medium inline-flex items-center">
              Ver Productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Carrito de Compras</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Productos ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </h2>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                     className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-lg font-bold text-blue-600 mt-2">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 mt-2 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen del Pedido</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotal())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">Gratis</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">IVA (5%)</span>
                  <span className="font-medium">{formatPrice(getTotal() * 0.05)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(getTotal() * 1.19)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link
                  to="/checkout"
                  className="w-full btn-primary text-white py-3 rounded-lg font-medium text-center block"
                >
                  Proceder al Pago
                </Link>
                
                <Link
                  to="/products"
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium text-center block hover:bg-gray-50 transition-colors"
                >
                  Seguir Comprando
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  🔒 Compra segura con SSL
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  ✅ Garantía de satisfacción
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;