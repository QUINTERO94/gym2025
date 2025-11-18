import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  productName: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
  productName
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onPrevious();
    } else if (e.key === 'ArrowRight') {
      onNext();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}

      {/* Main image */}
      <div className="max-w-4xl max-h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Product name */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
        <h3 className="font-semibold">{productName}</h3>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {/* This will be handled by parent component */}}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-white' : 'border-gray-500'
              }`}
            >
              <img
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-contain bg-gray-800"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageModal;