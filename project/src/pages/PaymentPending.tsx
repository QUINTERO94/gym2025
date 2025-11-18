import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

const PaymentPending = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <Clock className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pago Pendiente</h1>
        <p className="text-gray-600 mb-8">
          Tu pago está pendiente de confirmación. Te notificaremos una vez que se complete.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full btn-primary text-white px-8 py-3 rounded-lg font-medium"
          >
            Volver al Inicio
          </button>
          <p className="text-sm text-gray-500">
            Puedes verificar el estado de tu pago en tu cuenta de Mercado Pago.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPending;