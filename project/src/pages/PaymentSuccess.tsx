import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Pago Exitoso!</h1>
        <p className="text-gray-600 mb-8">Tu compra ha sido procesada correctamente. ¡Gracias por tu pedido!</p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full btn-primary text-white px-8 py-3 rounded-lg font-medium"
          >
            Volver al Inicio
          </button>
          <p className="text-sm text-gray-500">
            Serás redirigido automáticamente en 5 segundos...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;