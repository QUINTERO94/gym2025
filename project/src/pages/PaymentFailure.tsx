import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const PaymentFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pago Fallido</h1>
        <p className="text-gray-600 mb-8">
          Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo o contacta a soporte.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/checkout')}
            className="w-full btn-primary text-white px-8 py-3 rounded-lg font-medium"
          >
            Reintentar Pago
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;