import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-blue-100">Estamos aquí para ayudarte con tu conversión de gas</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+57 317 4017277</p>
                  <p className="text-gray-600">+57 (1) 234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">gerencia@comercializadoragm.com</p>
                  <p className="text-gray-600">pedidos@comercializadoragm.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">Calle 6a # 32 a 33</p>
                  <p className="text-gray-600">Bogotá, Colombia - Barrio Pensilvania</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Horarios</h3>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sábados: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Contacto Rápido</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </button>
                <a
                  href="https://wa.me/573001234567?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20productos%20y%20servicios%20de%20conversión%20de%20gas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="300 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="cotizacion">Cotización</option>
                    <option value="conversion">Conversión de Gas</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="garantia">Garantía</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-white py-3 rounded-lg font-medium inline-flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestra Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4717.404802250586!2d-74.10323992432382!3d4.6097608424378045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99402a56aaab%3A0xf1b1f1ee29ea8d!2sCl.%206A%20%2332a-33%2C%20Bogot%C3%A1!5e1!3m2!1ses!2sco!4v1758560136333!5m2!1ses!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación GYM SAS - Calle 6a # 32 a 33, Bogotá, Colombia"
            ></iframe>
          </div>
        </div>
        
        {/* Shipping Tracking */}
      <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Seguimiento de Envíos</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Servientrega</h3>
                <p className="text-gray-600 mb-4">Rastrea tu pedido con Servientrega</p>
                <a
                  href="https://www.servientrega.com/wps/portal/servientrega/transacciones/rastreo-de-envios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-block"
                >
                  Rastrear Envío
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">I</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interrapidísimo</h3>
                <p className="text-gray-600 mb-4">Rastrea tu pedido con Interrapidísimo</p>
                <a
                  href="https://www.interrapidisimo.com/rastreo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-block"
                >
                  Rastrear Envío
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default Contact;