import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/G&M Rojo logo 2025.png"
                alt="GYM SAS Logo"
                className="h-12 object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">Comercializadora GYM SAS</p>
            <p className="text-gray-400 mb-4">
              Especialistas en conversión de gas vehicular con más de 10 años de experiencia. 
              Calidad garantizada y servicio técnico especializado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/gymsas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/gymsas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/gymsas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@gymsas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Kits de Conversión</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Reguladores</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Inyectores</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Cilindros</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Accesorios</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Conversión a Gas</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Mantenimiento</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Certificación</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Revisión Técnica</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Soporte Técnico</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Calle 6a # 32 a 33</p>
                  <p className="text-gray-400">Bogotá, Colombia - Barrio Pensilvania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">+57 317 401 7277</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">pedidos@comercializadoragm.com</p>
              </div>
              
              {/* Shipping Tracking Links */}
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-white mb-2">Seguimiento de Envíos</h5>
                <div className="space-y-1">
                  <a
                    href="https://www.servientrega.com/wps/portal/servientrega/transacciones/rastreo-de-envios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors block"
                  >
                    📦 Servientrega
                  </a>
                  <a
                    href="https://www.interrapidisimo.com/rastreo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors block"
                  >
                    🚚 Interrapidísimo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GYM SAS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Garantías
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;