import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const paymentMethod = 'mercadopago'; // Solo Mercado Pago
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Info
    address: '',
    city: '',
    department: '',
    zipCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Reemplaza esta URL con la URL real de tu función Edge de Supabase
      const SUPABASE_FUNCTION_URL = 'https://oezmagesmnbsmgokzcoy.supabase.co/functions/v1/create-mercadopago-preference';
      
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            description: item.description || item.name
          })),
          payer: {
            email: formData.email,
            name: formData.firstName,
            surname: formData.lastName,
            phone: {
              number: formData.phone
            },
            address: {
              street_name: formData.address,
              zip_code: formData.zipCode,
            }
          },
          back_urls: {
            success: `${window.location.origin}/payment/success`,
            failure: `${window.location.origin}/payment/failure`,
            pending: `${window.location.origin}/payment/pending`,
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear la preferencia de pago.');
      }

      const data = await response.json();
      window.location.href = data.init_point; // Redirige al usuario a Mercado Pago

    } catch (error) {
      console.error('Error al procesar el pago con Mercado Pago:', error);
      alert(`Error al procesar el pago: ${error.message}`);
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <button
            onClick={() => navigate('/products')}
            className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
          >
            Ir a Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-sm text-gray-600">
            <span className="w-20 text-center">Información</span>
            <span className="w-20 text-center">Envío</span>
            <span className="w-20 text-center">Pago</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Personal</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombres *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apellidos *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Information */}
              {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Envío</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Departamento *
                        </label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Código Postal
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Método de Pago</h2>
                  
                  {/* Payment Method Info */}
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center mb-6">
                    <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="text-blue-800 font-medium">Mercado Pago</p>
                      <p className="text-blue-600 text-sm">Paga con tu cuenta de Mercado Pago, tarjetas de crédito/débito, PSE, Nequi y más</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="btn-primary text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Lock className="w-5 h-5 mr-2" />
                          Pagar con Mercado Pago
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen del Pedido</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain bg-gray-100 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-600">Cantidad: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotal())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">Gratis</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">IVA (19%)</span>
                  <span className="font-medium">{formatPrice(getTotal() * 0.19)}</span>
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
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Lock className="w-4 h-4 mr-1" />
                  Pago seguro con SSL
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Garantía de satisfacción
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;