import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Clock, Award, ZoomIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ImageModal from '../components/ImageModal';

const Home = () => {
  const { addToCart } = useCart();
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    productName: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    productName: ''
  });

  const featuredProducts = products.slice(0, 3);

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: 'Conversión Profesional',
      description: 'Instalación completa de sistemas de gas con garantía'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Certificación Oficial',
      description: 'Certificados avalados por entes reguladores'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Mantenimiento',
      description: 'Servicio técnico especializado y mantenimiento preventivo'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Garantía Total',
      description: 'Garantía completa en productos y servicios'
    }
  ];

  const openImageModal = (product: any, imageIndex: number = 0) => {
    setModalImage({
      isOpen: true,
      images: product.images,
      currentIndex: imageIndex,
      productName: product.name
    });
  };

  const closeImageModal = () => {
    setModalImage(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = () => {
    setModalImage(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
    }));
  };

  const prevImage = () => {
    setModalImage(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Repuestos para Vehiculos
                <span className="block text-yellow-300">Dedicados camiones buses y tratocamiones</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Ahorra hasta 60% en combustible con nuestros sistemas de conversión 
                certificados y servicio técnico especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Ver Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hero-animation">
              <img 
                src="https://i.postimg.cc/sD6mQZsG/portada-pagina.jpg" 
                alt="Conversión de Gas" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir GYM SAS?</h2>
            <p className="text-xl text-gray-600">Somos líderes en conversión de gas vehicular</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 card-hover bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-xl text-gray-600">Los mejores productos para tu conversión</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative group">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                   className="w-full h-48 object-contain bg-gray-100"
                  />
                  
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openImageModal(product, 0)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100"
                    >
                      <ZoomIn className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toLocaleString()}
                    </span>
                    <button 
                     onClick={() => addToCart({ ...product, image: product.images[0] })}
                      className="btn-primary text-white px-6 py-2 rounded-lg font-medium"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center">
              Ver Todos los Productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Vehículos Convertidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Testimonios reales de clientes satisfechos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                role: "Empresario",
                content: "Excelente servicio, mi vehículo quedó perfectamente convertido. El ahorro en combustible es increíble.",
                rating: 5
              },
              {
                name: "María González",
                role: "Taxi Driver",
                content: "La conversión fue rápida y profesional. Muy recomendado para quienes buscan ahorrar en combustible.",
                rating: 5
              },
              {
                name: "Juan Pérez",
                role: "Conductor",
                content: "Servicio de calidad con garantía. El equipo técnico es muy profesional y experimentado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para convertir tu vehículo?</h2>
          <p className="text-xl mb-8">Obtén una cotización gratuita y comienza a ahorrar hoy mismo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/573174017277?text=Hola,%20me%20interesa%20obtener%20una%20cotización%20para%20la%20conversión%20de%20mi%20vehículo%20a%20gas%20natural.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Cotizar Ahora
            </a>
            <Link to="/products" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeImageModal}
        images={modalImage.images}
        currentIndex={modalImage.currentIndex}
        onPrevious={prevImage}
        onNext={nextImage}
        productName={modalImage.productName}
      />
    </div>
  );
};

export default Home;