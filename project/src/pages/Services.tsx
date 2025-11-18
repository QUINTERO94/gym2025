import React from 'react';
import { Wrench, Shield, Clock, Award, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Conversión Completa',
      description: 'Instalación profesional de sistemas de gas natural vehicular',
      features: ['Instalación certificada', 'Pruebas de funcionamiento', 'Garantía 2 años'],
    
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Certificación y Revisión',
      description: 'Certificación oficial y revisión técnica de sistemas de gas',
      features: ['Certificado oficial', 'Revisión completa', 'Documentación legal'],
     
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento regular para óptimo funcionamiento del sistema',
      features: ['Revisión trimestral', 'Cambio de filtros', 'Ajuste de presión'],
     
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Soporte Técnico 24/7',
      description: 'Asistencia técnica especializada disponible las 24 horas',
      features: ['Soporte telefónico', 'Servicio a domicilio', 'Emergencias'],
     
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Evaluación del Vehículo',
      description: 'Inspección completa para determinar la viabilidad de la conversión'
    },
    {
      step: '02',
      title: 'Cotización Personalizada',
      description: 'Presupuesto detallado basado en las características del vehículo'
    },
    {
      step: '03',
      title: 'Instalación Profesional',
      description: 'Montaje del sistema por técnicos certificados y especializados'
    },
    {
      step: '04',
      title: 'Pruebas y Certificación',
      description: 'Verificación del funcionamiento y obtención de certificados'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-blue-100">Soluciones completas para tu conversión de gas vehicular</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <div className="text-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.title === 'Soporte Técnico 24/7' && (
                  <a
                    href="https://wa.me/573174017277?text=Hola,%20necesito%20soporte%20técnico%20para%20mi%20vehículo.%20¿Podrían%20ayudarme?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar Soporte
                  </a>
                )}
              
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Conversión</h2>
            <p className="text-xl text-gray-600">Paso a paso hacia tu conversión exitosa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios de la Conversión</h2>
            <p className="text-xl text-gray-600">Ahorra dinero y cuida el medio ambiente</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Ahorro en Combustible</div>
              <p className="text-gray-600">Reduce significativamente tus gastos en combustible</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Menos Emisiones</div>
              <p className="text-gray-600">Contribuye a la reducción de emisiones contaminantes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5 Años</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Retorno de Inversión</div>
              <p className="text-gray-600">Recupera la inversión en menos de 5 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos tus dudas sobre la conversión</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: '¿Cuánto tiempo toma la conversión?',
                  answer: 'El proceso completo toma entre 3 a 5 días hábiles, incluyendo la instalación y certificación.'
                },
                {
                  question: '¿Qué garantía tiene el sistema?',
                  answer: 'Ofrecemos 2 años de garantía en la instalación y repuestos originales.'
                },
                {
                  question: '¿Puedo usar gasolina y gas alternadamente?',
                  answer: 'Sí, el sistema es dual. Puedes cambiar entre gasolina y gas cuando lo desees.'
                },
                {
                  question: '¿Afecta el rendimiento del vehículo?',
                  answer: 'No, el rendimiento se mantiene igual y en algunos casos mejora la potencia.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para convertir tu vehículo?</h2>
          <p className="text-xl mb-8 text-blue-100">Contacta con nuestros expertos y obtén una cotización personalizada</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573174017277?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20los%20servicios%20de%20conversión%20de%20gas.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/573174017277?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20los%20servicios%20de%20conversión%20de%20gas.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;