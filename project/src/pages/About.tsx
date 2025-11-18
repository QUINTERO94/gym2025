import React from 'react';
import { Users, Award, Shield, Wrench, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Calidad',
      description: 'Promover el uso de GNCV, GLP Autogas y otros combustibles limpios como alternativa para la preservacion del  medio ambiente y la racionalizacion de gastos operativos en el uso de combustibles'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Compromiso',
      description: 'Actuar en el mercado de GNCV, GLP Autogas y otros combustibles limpios con sujecion y cumplimiento de los reglamentos tecnicos y normas legales establecidas en la materia por el Gobierno Nacional'
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: 'Experiencia',
      description: 'Más de 24 años de experiencia en el sector de conversión de gas vehicular'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Innovación',
      description: 'Tecnología de vanguardia y constante innovación en nuestros productos'
    }
  ];

  const team = [
    {
      name: 'Ing. María González',
      role: 'Gerente General',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '15 años de experiencia'
    },
    {
      name: 'Ing. Carlos Rodríguez',
      role: 'Jefe Técnico',
      image: 'https://images.pexels.com/photos/3807387/pexels-photo-3807387.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '12 años de experiencia'
    },
    {
      name: 'Ing. Ana Martínez',
      role: 'Coordinadora de Calidad',
      image: 'https://images.pexels.com/photos/3807388/pexels-photo-3807388.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '10 años de experiencia'
    },
    {
      name: 'Ing. Luis Fernández',
      role: 'Especialista en Certificación',
      image: 'https://i.postimg.cc/hGtc4wms/carro25.jpg',
      experience: '8 años de experiencia'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-bg text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Sobre GYM SAS</h1>
            <p className="text-xl text-blue-100">Líderes en conversión de gas vehicular desde 2010</p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Somos una empresa Colombiana que cuenta con mas de 24 años de experiencia en el suministro de equipos
                para la conversion de Gas Natural comprimido Vehicular GNCV, Gas Licuado de petroleo GLP y Estaciones 
                de Servicios EDS; dando cumplimiento a los estandares de calidad y garantizando siempre total servicio  y plena 
                sastifacion.
                
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de más de una década, hemos crecido hasta convertirnos en una de las 
                comercializadoras más reconocidas del país, especializándonos en la venta de 
                productos de alta calidad y la prestación de servicios técnicos especializados.
              </p>
              <p className="text-gray-600">
                Hoy, con más de 5,000 vehículos convertidos y un equipo de profesionales altamente 
                capacitados, continuamos comprometidos con la innovación y la excelencia en el servicio.
              </p>
            </div>
            <div>
              <img 
                src="https://i.postimg.cc/hGtc4wms/carro25.jpg" 
                alt="Taller GYM SAS" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
              </div>
              <p className="text-gray-600">
               Comercializar productos y servicios de excelente calidad con el fin de proporcionar 
                sastifacion a los usuarios del GNCV y salvaguardar el medio ambiente conforme a las
                directrices actuales a nivel mundial, con profesionalismo, seriedad y cumplimiento 
                para beneficio de clientes, socios y empleados.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-600">
                Ser reconocida como empresa lider en el suministro, montaje y asistencia 
                tecnica de equipos para GNCV y otros combustibles alternativos, caracterizada 
                por calidad, experiencia, servicio, seriedad, solidez y competitividad
                para beneficio de sus clientes y el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Objetivos</h2>
            <p className="text-xl text-gray-600">Los principios que guían nuestro trabajo diario</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 card-hover">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">Profesionales comprometidos con la excelencia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Vehículos Convertidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Técnicos Certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Reconocimientos</h2>
            <p className="text-xl text-gray-600">Avalados por las principales entidades del sector</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Sistema de Gestión de Calidad</p>
            </div>
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificación ICONTEC</h3>
              <p className="text-gray-600">Taller Autorizado para Conversión</p>
            </div>
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cámara de Comercio</h3>
              <p className="text-gray-600">Empresa Legalmente Constituida</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;