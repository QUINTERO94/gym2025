import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, MessageCircle, FileText, Star, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ImageModal from '../components/ImageModal';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link to="/products" className="btn-primary text-white px-6 py-3 rounded-lg font-medium">
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppQuote = () => {
    const message = `Hola, me interesa cotizar el producto: ${product.name}. ¿Podrían enviarme más información y precio especial?`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const openImageModal = () => {
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const nextImageModal = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImageModal = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Productos</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-4 group cursor-pointer">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
               className="w-full h-96 object-contain bg-gray-100"
                onClick={openImageModal}
              />
              
              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={openImageModal}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-4 rounded-full hover:bg-gray-100"
                >
                  <ZoomIn className="w-8 h-8" />
                </button>
              </div>
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                     className="w-full h-20 object-contain bg-gray-100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>


        {/* Image Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeImageModal}
          images={product.images}
          currentIndex={currentImageIndex}
          onPrevious={prevImageModal}
          onNext={nextImageModal}
          productName={product.name}
        />
          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'En Stock' : 'Agotado'}
                </span>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>

              <div className="text-4xl font-bold text-blue-600 mb-8">
                {formatPrice(product.price)}
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Especificaciones</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 font-medium">{key}:</span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                 onClick={() => addToCart({ ...product, image: product.images[0] })}
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-medium inline-flex items-center justify-center ${
                    product.inStock 
                      ? 'btn-primary text-white hover:shadow-lg' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Agregar al Carrito' : 'Producto Agotado'}
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar por WhatsApp
                </button>

                {product.technicalSheetUrl && (
                  <a
                    href={product.technicalSheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Ver Ficha Técnica
                  </a>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-green-600 font-semibold">✓ Garantía</div>
                    <div className="text-sm text-gray-600">2 años</div>
                  </div>
                  <div>
                    <div className="text-blue-600 font-semibold">🚚 Envío</div>
                    <div className="text-sm text-gray-600">Gratis</div>
                  </div>
                  <div>
                    <div className="text-purple-600 font-semibold">🔧 Instalación</div>
                    <div className="text-sm text-gray-600">Disponible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                >
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="text-lg font-bold text-blue-600">
                      {formatPrice(relatedProduct.price)}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;