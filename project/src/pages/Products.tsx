import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Star, ShoppingCart, Eye, MessageCircle, ZoomIn,
  Grid3X3, Wrench, Cpu, Zap, Flame, Package, PackageOpen, Cable, Cylinder,
  Settings, Minus, Radio, RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, categories, Category } from '../data/products';
import ImageModal from '../components/ImageModal';

// Icon mapping for dynamic rendering
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Grid3X3,
  Wrench,
  Cylinder,
  Cpu,
  Zap,
  Flame,
  Package,
  PackageOpen,
  Cable,
  Settings,
  Minus,
  Radio,
  RotateCcw
};

// Add Pipe icon fallback (using Cable as substitute since Pipe doesn't exist in lucide-react)
iconMap.Pipe = Cable;

const Products = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
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

  const handleWhatsAppQuote = (product: any) => {
    const message = `Hola, me interesa cotizar el producto: ${product.name}. ¿Podrían enviarme más información y precio especial?`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

  const filteredProducts = products
    .filter(product => 
      searchTerm.trim() !== '' 
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : (selectedCategory === 'all' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Productos</h1>
          <p className="text-gray-600">Encuentra los mejores productos para tu conversión de gas</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Buscar</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <div className="space-y-3">
                {categories.map((category: Category) => {
                  const IconComponent = iconMap[category.icon];
                  return (
                    <label key={category.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`flex items-center p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}>
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
                        )}
                        <span className="font-medium text-sm">{category.name}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ordenar por</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Calificación</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Mostrando {filteredProducts.length} productos
              </p>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Filtros aplicados</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
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
                    
                    {!product.inStock && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                        Agotado
                      </div>
                    )}
                    {product.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        +{product.images.length - 1} fotos
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-sm"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Link>
                      
                      <button
                        onClick={() => handleWhatsAppQuote(product)}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center text-sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Cotizar
                      </button>
                      
                      <button 
                       onClick={() => addToCart({ ...product, image: product.images[0] })}
                        disabled={!product.inStock}
                        className={`px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center text-sm ${
                          product.inStock 
                            ? 'btn-primary text-white hover:shadow-lg' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        {product.inStock ? 'Carrito' : 'Agotado'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron productos</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>

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
    </div>
  );
};

export default Products;