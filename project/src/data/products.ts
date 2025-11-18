export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  rating: number;
  inStock: boolean;
  technicalSheetUrl?: string;
  specifications?: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Kit Quinta Generacion 4 Cil Modelo Hengda',
    price: 890000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/gj8xyrPf/kit-quinta-hengda-10.jpg'
    ],
    description: 'Kit completo para conversión de gas vehicular de quinta generación con regulador de alta calidad',
    rating: 4.8,
    inStock: true,
    technicalSheetUrl: '/documentos/kit-tercera-premium.pdf',
    specifications: {
     
    }
  },
  {
    id: '2',
    name: 'Kit Quinta Generacion 4 Cil Modelo Hana',
    price: 890000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/fL48R5Yc/kit-quinta-hana.jpg'
      
    ],
    description: 'Kit de conversión de quinta generación con inyección directa y control electrónico avanzado',
    rating: 4.9,
    inStock: true,
    technicalSheetUrl: '/documentos/kit-quinta-avanzado.pdf',
    specifications: {
      
    }
  },
  {
    id: '3',
    name: 'Regulador Quinta Hana',
    price: 320000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/66ZdKk3n/regulador-quinta-hana.jpg',
      'https://i.postimg.cc/D07ft40C/accesorios-regulado-hana-5ta.jpg',
       'https://i.postimg.cc/x1NQp3gf/regulador-5ta-hana-2.jpg'
    ],
    description: 'Regulador de presión  Lovato con certificación internacional para sistemas de gas vehicula',
    rating: 4.9,
    inStock: true,
    technicalSheetUrl: '/documents/regulador hana.pdf',
    specifications: {
      
    }
  },
  {
    id: '4',
    name: 'Variador Map',
    price: 100000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/Y2RvVFgJ/variador-map-2.jpg',
      'https://i.postimg.cc/t4YnFgs8/variador-map-2-1.jpg',
      'https://i.postimg.cc/MTyQXrnT/variador-map-2-3.jpg'
    ],
    description: 'Variador Map',
    rating: 4.7,
    inStock: true,
    technicalSheetUrl: '/documentos/inyectores-4cil.pdf',
    specifications: {
     
    }
  },
  {
    id: '5',
    name: 'Computadora Tony 4 Cil llave Digital',
    price: 300000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/PqYZJLZQ/COMPUTADORA-TONY-4-CIL-OBD.jpg',
      'https://i.postimg.cc/XJvVhmVB/COMPUTADORA-TONY-OBD-LLAVE-DIGITAL1.jpg', 
      'https://i.postimg.cc/yxMsDN00/ACCESORIOS-COMPU-TONY-4-CIL-2.jpg',
      'https://i.postimg.cc/fbvLzvdc/ACCESORIOS-COMPU-TONY-4-CIL.jpg',
      'https://i.postimg.cc/J4WxjqCg/sensor-temepratura-compu-tony-4-cil.jpg'
    ],
    description: 'Computadora Tony 4 cil',
    rating: 4.8,
    inStock: true,
    technicalSheetUrl: '/documents/computadora 4 cil tony.pdf',
    specifications: {
     
    }
  },
  {
    id: '6',
    name: 'Manguera de Venteo',
    price: 18000,
    category: 'mangueras',
    images: [
      'https://i.postimg.cc/LsWzVSrD/MANGUERA-DE-VENTEO11.jpg',
     'https://i.postimg.cc/26BncJYD/MANGUERA-VENTEO-12.jpg',
      'https://i.postimg.cc/QCQ1sTVY/MANGUERA-VENTEO-13.jpg'
    ],
    description: 'Manguera de Venteo',
    rating: 4.6,
    inStock: true,
    technicalSheetUrl: '/documentos/mangueras-alta-presion.pdf',
    specifications: {
     
    }
  },
  {
    id: '7',
    name: 'Sensor Map 5 pines',
    price: 80000,
    category: 'sensores',
    images: [
      'https://i.postimg.cc/28MdDxvC/SENSOR-MAP.jpg',
      'https://i.postimg.cc/FR6zLThR/SENSOR-MAP-COMPU-TONY-4-CIL-2.jpg'
    ],
    description: 'Sensor digital de presión para monitoreo en tiempo real',
    rating: 4.7,
    inStock: true,
    technicalSheetUrl: '/documentos/sensor-presion.pdf',
    specifications: {
    
    }
  },
  {
    id: '8',
    name: 'Regulador Lovato Tercera',
    price: 450000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/hPqGHjfW/regulador-lovato-tercera-1.jpg',
      'https://i.postimg.cc/VkfkkVqK/regulador-lovato-tercera-2.jpg'
    ],
    description: 'Regulador Lovato de Tercera',
    rating: 4.5,
    inStock: true,
    technicalSheetUrl: '/documentos/tuberias-cobre.pdf',
    specifications: {
     
    }
  },
  {
    id: '9',
    name: 'Regulador Diesel',
    price: 1450000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/y8VTj7Ks/regulador-diesel.jpg',
      'https://i.postimg.cc/CL0CMwzk/regulador-diesel1.jpg'
    ],
    description: 'Regulador Diesel de quinta ',
    rating: 4.6,
    inStock: true,
    technicalSheetUrl: '/documentos/kit-glp-residencial.pdf',
    specifications: {
      
    }
  },
  {
    id: '10',
    name: 'Computadora 8 cil Alex OBD',
    price: 1200000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/8z4RHcfp/computadora-8-cil-5.jpg',
      'https://i.postimg.cc/K8gsLqv2/accesorios-computadora-alex-6-cil-optima.jpg',
      'https://i.postimg.cc/JnRTfR3r/sensor-computadora-alex-6-cil-optima.jpg',
      'https://i.postimg.cc/Y2s336Pq/cableado-computadora-alex-6-cil-optima.jpg'
    ],
    description: 'computadora 8 cil alexs',
    rating: 4.4,
    inStock: true,
    technicalSheetUrl: '/documents/computadora 8 cil alex.pdf',
    specifications: {
      
    }
  },
  {
    id: '11',
    name: 'Regulador Tercera H-Super',
    price: 280000,
    category: 'reguladores',
    images: [
     'https://i.postimg.cc/fWPgqnPd/regulador-3ra-h-super.jpg'
    
    ],
    description: 'Regulador de presión Tomasetto AT09 para sistemas de tercera generación',
    rating: 4.7,
    inStock: true,
    technicalSheetUrl: '/documents/regulador h super.pdf',
    specifications: {
  
    }
  },
  {
    id: '12',
    name: 'Regulador Hengda ',
    price: 200000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/Dzq8HT5w/regulador-5ta-hengda-gnv2.jpg',
      'https://i.postimg.cc/mrPZQG1r/accesorios-regulador-quinta-hengda.jpg'
      
    ],
    description: 'Regulador BRC Genius MAX de alta precisión para sistemas de quinta generación',
    rating: 4.9,
    inStock: true,
    technicalSheetUrl: '/documents/regulador quinta hengda.pdf',
    specifications: {
    
    }
  },
  {
    id: '13',
    name: 'Regulador Quinta Autogas',
    price: 180000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/nh9ksXVS/regulador-tomaseto1.jpg',
      'https://i.postimg.cc/0jHYjsTq/regulador-tomaseto3.jpg',
      'https://i.postimg.cc/KYrtLL6f/regulador-tomaseto2.jpg'
    ],
    description: 'Regulador Landi Renzo LI02 con tecnología avanzada de control de presión',
    rating: 4.8,
    inStock: true,
    technicalSheetUrl: '/documents/regulador autogas glp.pdf',
    specifications: {
    
    }
  },
  {
    id: '14',
    name: 'Computadora Tony 6 Cil OBD',
    price: 530000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/vZ1tkcpL/tony-6-cil-obd.jpg',
      'https://i.postimg.cc/43Vb4j4Y/accesorios-tony-6-cil-obd2.jpg',
      'https://i.postimg.cc/xCPvMHzY/accesorios2-tony-6-cil-obd2.jpg'
    ],
    description: 'Computadora 6 cil obd',
    rating: 4.5,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '15',
    name: 'Abrazaderas',
    price: 6000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/43wJCNJv/abrazadera22.jpg',
      'https://i.postimg.cc/Ss3Gy9HG/abrazadera-12-22-1.jpg',
      'https://i.postimg.cc/ncv1JC2v/abrazadera-12-22-2.jpg',
      'https://i.postimg.cc/QxkczvNm/abrazadera-19-20.jpg',
      'https://i.postimg.cc/j2YJg4GB/abrazadera-25-40-2.jpg'
    ],
    description: 'abarzaderas de todos los tamaños',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '16',
    name: 'Boquilla Venteo',
    price: 8000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/wjrPttK7/boquilla-de-venteo.jpg',
      'https://i.postimg.cc/05CBYXRg/boquilla-de-venteo-2.jpg'
    ],
    description: 'Boquilla de Venteo',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/boquilla de venteo 30.pdf',
    specifications: {
      
    }
  },
  {
    id: '17',
    name: 'Codo de 6 MM',
    price: 6000,
    category: 'accesorios',
    images: [
     'https://i.postimg.cc/kgjcGLbs/CODO-DE-6-MM.jpg',
    'https://i.postimg.cc/Dfd1mtVG/CODO-DE-6-MM1.jpg'
    ],
    description: 'Codo de 6 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/codo 6.pdf',
    specifications: {
      
    }
  },
  {
     id: '18',
    name: 'Codo de 8 MM',
    price: 7000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/5yZhh6xH/codo-de-8mm.jpg',
      'https://i.postimg.cc/FK9MXtQx/codo-de-8-mm1.jpg',
      'https://i.postimg.cc/Rq5YPyRK/codo-de-8mm2.jpg',
      'https://i.postimg.cc/CKxwHndY/codo-de-8mm3.jpg'
    ],
    description: 'Codo de 8 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/codo 8.pdf',
    specifications: {
      
    }
  },
  {
    id: '19',
    name: 'Conector  de 6 MM',
    price: 5000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/ydrxSXTw/CONCETOR-DE-6-MM1.jpg',
      'https://i.postimg.cc/nryL3Fg2/CONCETOR-6-MM2.jpg',
      'https://i.postimg.cc/mgNrSGw3/CONCESTOR-6-MM3.jpg'
    ],
    description: 'Conector  de 6 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/conector 6.pdf',
    specifications: {
      
    }
  },
  {
     id: '20',
    name: 'Conector  de 8 MM',
    price: 6000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/6QnFZ9fw/conector-de-8mm.jpg',
      'https://i.postimg.cc/3JN6BjFt/concetor-de-8-mm1.jpg',
      'https://i.postimg.cc/rwL1mMs5/concetor-8-mm2.jpg'
    ],
    description: 'Conector  de 8 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/conector 8.pdf',
    specifications: {
      
    }
  },
  {
     id: '21',
    name: 'Racor de 6 MM',
    price: 30000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/ncxCtV0m/racor-de-6mm.jpg',
      'https://i.postimg.cc/pXkXbf9N/racor-de-6mm-2.jpg',
      'https://i.postimg.cc/76vqMXRz/racor-6-mm-3.jpg'
    ],
    description: 'Racor de 6 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '22',
    name: 'Racor de 8 MM',
    price: 30000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/tJMSWvSQ/RACOR-DE-8-MM.jpg',
      'https://i.postimg.cc/pTdJCYn2/RACOR-DE-8-MM-1.jpg',
      'https://i.postimg.cc/zDV9XTPZ/RACOR-DE-8-MM3.jpg'
    ],
    description: 'Racor de 8 MM',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '23',
    name: 'Variador Joker',
    price: 130000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/XvWg73zm/variador-joker.jpg',
      'https://i.postimg.cc/Gt4FSp48/variador-joker2.jpg',
      'https://i.postimg.cc/PxpbSxpL/variador-joker3.jpg'
    ],
    description: 'Variador Joker',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '24',
    name: 'Variador Wolf',
    price: 130000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/X7LtdHwr/variador-wolf.jpg',
      'https://i.postimg.cc/FR0BRDrs/variador-wolf-cable.jpg'
    ],
    description: 'Variador Wolf',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '25',
    name: 'Variador Shart',
    price: 300000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/9FP7ckvN/variador-shark.jpg',
      'https://i.postimg.cc/9fk4xH7z/accesorios-variador-shart.jpg',
      'https://i.postimg.cc/28HCdFvS/variador-shart2.jpg'
    ],
    description: 'Variador Shart',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '26',
    name: 'Variador Puma',
    price: 90000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/k4Xmt24b/variador-puma2.jpg',
      'https://i.postimg.cc/5Nv2JFF4/variador-puma1.jpg',
      'https://i.postimg.cc/tTY9M1jH/accesorios-variador-puma.jpg'
    ],
    description: 'Variador Puma',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '27',
    name: 'Variador spider',
    price: 90000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/CLZfq1BX/variador-spider.jpg',
      'https://i.postimg.cc/g0pwQHSb/variador-spider-con-cable2.jpg',
      'https://i.postimg.cc/1X84wCtw/accesorios-variador-spider.jpg'
    ],
    description: 'Variador Spider',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '28',
    name: 'Variador Panda',
    price: 90000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/v87310nC/variador-panda.jpg',
      'https://i.postimg.cc/yYQh9t8p/variador-panda-cable1.jpg',
      'https://i.postimg.cc/43tpD3bj/accesorios-variador-panda.jpg'
    ],
    description: 'Variador Panda',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '29',
    name: 'Variador 291',
    price: 100000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/13Qw1SXd/variador-291.jpg',
      'https://i.postimg.cc/L6N22B8M/variador-2912.jpg',
      'https://i.postimg.cc/wM9Yd7Kv/acesorios-variador-map-291.jpg'
    ],
    description: 'Variador 291',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '30',
    name: 'Conmutador Carburado',
    price: 50000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/wMcpZD73/llave-carburda.jpg',
      'https://i.postimg.cc/6qhkYwmv/llave-carburda2.jpg',
      'https://i.postimg.cc/05HdKhQW/acesorios-llave-inyectada3.jpg'
    ],
    description: 'Conmutador Carburado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/llave carburada y inyectada.pdf',
    specifications: {
      
    }
  },
  {
    id: '31',
    name: 'Conmutador Inyectado',
    price: 50000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/Y248RtJK/llave-inyectada-4.jpg',
      'https://i.postimg.cc/SKNfM4WP/llave-intectada-2.jpg',
      'https://i.postimg.cc/XYq0XkSw/LLAVE-INTECTADA.jpg',
      'https://i.postimg.cc/05HdKhQW/acesorios-llave-inyectada3.jpg'
    ],
    description: 'Conmutador Inyectado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/llave inyectada.pdf',
    specifications: {
      
    }
  },
  {
    id: '32',
    name: 'Riel 4 cil Hengda',
    price: 120000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/tRWtKbwr/riel-4-cil-negro-28.jpg',
      'https://i.postimg.cc/zGBhGY2Y/riel-4-cil-negro-29.jpg',
      'https://i.postimg.cc/vBpPfmLz/RIEL-4-CIL-HENGDA.jpg',
      'https://i.postimg.cc/GtFjDxpL/RIEL-4-CIL-HENGDA-ROJO-1.jpg',
     'https://i.postimg.cc/wvhyGqML/accesorios-riel-4-cil-negro-30.jpg'
    ],
    description: 'Riel 4 Cil Hengda',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/riel Inyectores 4cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '33',
    name: 'Riel 3 cil Hana Verde ',
    price: 360000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/XYMH1Lhg/RIEL3-CIL-HANA-VERDE.jpg',
      'https://i.postimg.cc/GpKX2CpM/RIEL-3-CIL-HANA-VERDE-2.jpg',
      'https://i.postimg.cc/G2SzFxGG/ACCESORIOS-RIEL-HANA-VERDE-3-CIL.jpg'
    ],
    description: 'Riel 3 Cil Hana Verde',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '34',
    name: 'Riel 4 cil Hana Rojo',
    price: 420000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/66vCbKND/RIEL-4-CIL-HANA-ROJO.jpg',
      'https://i.postimg.cc/8cQfgFVx/RIEL-4-CIL-HANAROJO2.jpg',
      'https://i.postimg.cc/8kMrBbRG/ACCESORIOS-RILE-HENGDA-4-CIL-ROJO2.jpg'
    ],
    description: 'Riel 4 Cil Hana Rojo',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '35',
    name: 'Riel 4 cil Hana Negro',
    price: 420000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/Jn8md0KT/RIEL-HANA-4-CIL-NEGRO2.jpg',
      'https://i.postimg.cc/W15c7VHZ/riel-hana-4-cil-negro1.jpg',
      'https://i.postimg.cc/8kMrBbRG/ACCESORIOS-RILE-HENGDA-4-CIL-ROJO2.jpg'
    ],
    description: 'Riel 4 Cil Hana Negro',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '36',
    name: 'Riel 4 cil Hana Azul',
    price: 420000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/t4Y2SPS5/RIEL-HANA-AZUL-4-CIL-2.jpg',
      'https://i.postimg.cc/LXzykpCF/RIEL-4-CIL-HANA-AZUL1.jpg',
      'https://i.postimg.cc/fT0vYZJ2/ACCESORIOS-RIEL-4-CIL-HANA-ROJO1.jpg'
    ],
    description: 'Riel 4 Cil Hana Azul',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '37',
    name: 'Riel 3 cil Negro',
    price: 360000,
    category: 'rieles',
    images: [
      'https://i.postimg.cc/pX9WPcpM/RIEL-HENGDA-3-CIL-NEGRO1.jpg',
      'https://i.postimg.cc/s2JyTt07/RIEL-3-CIL-HENGDA-NEGRO-2.jpg',
      'https://i.postimg.cc/1z8cBQzY/ACCESORIOS-RIEL-HENGDA-3-CIL-NEGRO.jpg'
    ],
    description: 'Riel 3 cil Negro',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/riel Inyectores 4cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '38',
    name: 'Valvula de Carga',
    price: 100000,
    category: 'valvulas',
    images: [
     'https://i.postimg.cc/9fvgTvQD/valvula-carga-25.jpg',
      'https://i.postimg.cc/1z6rx4yz/valvula-carga-26.jpg',
     'https://i.postimg.cc/3NrXDBmy/valvula-carga-27.jpg',
      'https://i.postimg.cc/L5yzk13x/valvula-carga-28.jpg',
      'https://i.postimg.cc/QM49y3TM/accesorios-valvula-carga-30.jpg',
      'https://i.postimg.cc/3Nm2VxmT/platina-4.jpg'
    ],
    description: 'Valvula de carga',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/valvula carga.pdf',
    specifications: {
      
    }
  },
  {
    id: '39',
    name: 'Valvula de Cilindro Autoventiante',
    price: 100000,
    category: 'valvulas',
    images: [
      'https://i.postimg.cc/kGYGswyN/valvula-de-cilindro-autoventiante.jpg',
      'https://i.postimg.cc/SxSCgXvy/VALVULA-CILINDRO-1.jpg',
      'https://i.postimg.cc/W1YFS5Zn/ACCESORIOS-VALVULA-CIL.jpg'
    ],
    description: 'Valvula de Cilindro Autoventiante',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/valvula cilindro.pdf',
    specifications: {
      
    }
  },
  {
    id: '40',
    name: 'kit Quinta Generacion 4 cil Modelo Pico',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo Pico',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '41',
    name: 'kit Quinta Generacion 4 cil Modelo Nano',
    price: 1010000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/hPJC0n3K/kit-4-cil-modelo-nano.jpg',
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo Nano',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '42',
    name: 'kit Quinta Generacion 4 cil Modelo standard',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/wBgdfMYh/kit-quinta-stadar-11.jpg',
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo standard',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '43',
    name: 'kit Quinta Generacion 4 cil Modelo Line',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo Line',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '44',
    name: 'kit Quinta Generacion 4 cil Modelo Premium',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/FzKzmp7m/kit-quinta-4-cil-premiun.jpg',
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo Premium',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '45',
    name: 'kit Quinta Generacion 4 cil Modelo AAA',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo AAA',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '46',
    name: 'kit Quinta Generacion 4 cil Modelo Top',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo Top',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '47',
    name: 'kit Quinta Generacion Modelo 4 cil GDI-GNV',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/15xCxnmD/flayers.jpg'
    ],
    description: 'kit Quinta Generacion 4 cil Modelo GDI-GNV',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '48',
    name: 'kit Quinta Generacion 6 Cil Modelo stag',
    price: 885000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/D0LDSd94/kit-seis-cil-estag-1.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo stag',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '49',
    name: 'kit Quinta Generacion 6 Cil Modelo Tony',
    price: 1065000,
    category: 'kits-quinta',
    images:[
      'https://i.postimg.cc/yNgKc245/kit-seis-cil-modelo-tony.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo Tony',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '50',
    name: 'kit Quinta Generacion 6 Cil Modelo Line',
    price: 1395000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/dtDsQnjN/kit-seis-cil-modelo-line.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo Line',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '51',
    name: 'kit Quinta Generacion 6 Cil Modelo Alex',
    price: 1565000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/k4q1Zz41/kit-6-cil-modelo-alex.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo Alex',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '52',
    name: 'kit Quinta Generacion 6 Cil Modelo Box',
    price: 1545000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/C5mDkRbw/kit-6-cil-kit-box.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo Box',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '53',
    name: 'kit Quinta Generacion 6 Cil Modelo Premium',
    price: 2065000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/6593tJYr/kit-6-cil-modelo-premium.jpg',
      'https://i.postimg.cc/5tSwYyLQ/players-6-cil.jpg'
    ],
    description: 'kit Quinta Generacion 6 Cil Modelo Premiumm',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '54',
    name: 'kit Quinta Generacion 8 Cil Modelo Stag',
    price: 955000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/Hxrkj2Qt/kit-8-cil-modelo-estag.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Stag',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '55',
    name: 'kit Quinta Generacion 8 Cil Modelo Tony',
    price: 1095000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/W36Jc5p9/kit-8-cil-modelo-tony.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Tony',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '56',
    name: 'kit Quinta Generacion 8 Cil Modelo Line',
    price: 1595000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/7PfNHpbT/kit-8-cil-modelo-line-1.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Line',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '57',
    name: 'kit Quinta Generacion 8 Cil Modelo Alex',
    price: 1635000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/HkCvnmrL/kit-8-cil-modelo-alex.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Alex',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '58',
    name: 'kit Quinta Generacion 8 Cil Modelo Box',
    price: 450000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/jjhJG8SM/kit-8-cil-modelo-box.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Box',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '59',
    name: 'kit Quinta Generacion 8 Cil Modelo Premium',
    price: 2275000,
    category: 'kits-quinta',
    images: [
      'https://i.postimg.cc/7LdhkKLS/kit-8-cil-modelo-premiun.jpg',
      'https://i.postimg.cc/rFYRKbsT/flayes-8-cil.jpg'
    ],
    description: 'kit Quinta Generacion 8 Cil Modelo Premium',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '60',
    name: 'kit Tercera Generacion Inyectado',
    price: 450000,
    category: 'kits-tercera',
    images: [
      'https://i.postimg.cc/Y0KG0mpg/equipo-inyectado.jpg'
    ],
    description: 'kit Tercera Generacion Inyectado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '61',
    name: 'kit Tercera Generacion Carburado',
    price: 450000,
    category: 'kits-tercera',
    images: [
      'https://i.postimg.cc/gJthMR0C/equipo-carburado.jpg'
    ],
    description: 'kit Tercera Generacion Carburado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '62',
    name: 'Mini-kit Tercera Generacion Carburado',
    price: 450000,
    category: 'kits-tercera',
    images: [
     'https://i.postimg.cc/HLZmxGtC/mini-kit-carburado.jpg'
    ],
    description: 'Mini-kit Tercera Generacion Carburado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '63',
    name: 'Mini-kit Tercera Generacion Inyectado',
    price: 450000,
    category: 'kits-tercera',
    images: [
      'https://i.postimg.cc/Y0KG0mpg/equipo-inyectado.jpg'
    ],
    description: 'Mini-kit Tercera Generacion Inyectado',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '64',
    name: 'Computadora 4 cil Nano',
    price: 600000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/t4qX006b/computadora-Nano.jpg',
      'https://i.postimg.cc/qqTP8nXr/computadora-Nano-2.jpg',
      'https://i.postimg.cc/656StBMM/computadora-nano-cableado.jpg',
      'https://i.postimg.cc/t4K2ZbzQ/computadora-nano-accesorios.jpg',
      'https://i.postimg.cc/q7mccdsv/computadora-nano-accesorios2.jpg'
    ],
    description: 'Computadora 4 cil Nano',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/computadora nano.pdf',
    specifications: {
      
    }
  },
  {
    id: '65',
    name: 'Computadora 6 cil stag',
    price: 380000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/2SDgMnPB/computadora-stag20.jpg',
      'https://i.postimg.cc/Twpsg0WB/computadora-stag10.jpg',
      'https://i.postimg.cc/3RVcBGXN/computadora-stag-accesorios1.jpg'
    ],
    description: 'Computadora 6 cil stag',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '66',
    name: 'Computadora 4 cil Zeni Blue Box Light',
    price: 400000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/Tw6yW7S3/comoutadora-blue-box-light.jpg',
      'https://i.postimg.cc/MGyHx0T2/computadora-alex-blue-box-light2.jpg',
      'https://i.postimg.cc/tJfpF7TN/computadora-alex-blue-box-cable4.jpg',
      'https://i.postimg.cc/QtY3rVpZ/computadora-alex-blue-box-accesorio.jpg',
      'https://i.postimg.cc/d11bnvgH/computadora-alex-blue-box-accesorios3.jpg'
    ],
    description: 'Computadora 4 cil Zeni Blue Box Light',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '67',
    name: 'Manguera de Agua',
    price: 12000,
    category: 'mangueras',
    images: [
      'https://i.postimg.cc/3JfVHQh5/manguera-de-agua.jpg',
      'https://i.postimg.cc/9F0gbg7x/manguera-de-agua-2.jpg',
      'https://i.postimg.cc/rwtnXdgx/mangura-agua3.jpg'
    ],
    description: 'Manguera de Agua',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '68',
    name: 'Tuberia Recubierta en pvc de 6mm',
    price: 30000,
    category: 'tuberias',
    images: [
      'https://i.postimg.cc/mDnD1213/tuveria-de-6mm.jpg',
      'https://i.postimg.cc/3W5x9SBd/tuberia-6mm-2.jpg',
      'https://i.postimg.cc/BnN1Q3pp/tuberia-de-6-mm3.jpg'
    ],
    description: 'Manguera Recubierta en pvc de 6mm',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/tuberia acero.pdf',
    specifications: {
      
    }
  },
  {
    id: '69',
    name: 'Tuberia Recubierta en pvc de 8mm',
    price: 180000,
    category: 'tuberias',
    images: [
      'https://i.postimg.cc/fyKMjzJg/tuberia-8mm-1.jpg',
      'https://i.postimg.cc/sxwRGTNk/tuberia-de-8-mm-2.jpg',
      'https://i.postimg.cc/28SYNfqr/tuberia-de-8mm3.jpg'
    ],
    description: 'Manguera Recubierta en pvc de 8mm',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/tuberia acero 8.pdf',
    specifications: {
      
    }
  },
  {
    id: '70',
    name: 'Filtro de 1 via GNV',
    price: 20000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/TYLm8MxF/FILTRO-DE-UNA-VIA-23.jpg',
      'https://i.postimg.cc/25mBB1WN/FILTRO-DE-UNA-VIA-24.jpg',
      'https://i.postimg.cc/FRHdDwGP/FILTRO-VIA-1-25.jpg'
    ],
    description: 'Filtro de 1 via 12x12 mm de GNV',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documentos/computadora-6-cil.pdf',
    specifications: {
      
    }
  },
  {
    id: '71',
    name: 'Manometro estandar GNV',
    price: 50000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/CxKbvB1C/manometro-1.jpg',
      'https://i.postimg.cc/rp0xkB5K/manometro.jpg'
    ],
    description: 'Manometro estandar GNV',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Manometro.pdf',
    specifications: {
      
    }
  },
  {
    id: '72',
    name: 'Emulador tipo Japan-Bosh 4 cil',
    price: 70000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/qMwFF5sP/emulador-4-cil.jpg',
      'https://i.postimg.cc/BvLwXZr3/cableado-japan-emulador.jpg',
      'https://i.postimg.cc/FHqT557B/accesorios-emulador-4-cil.jpg',
      'https://i.postimg.cc/fTRCVTdP/cable-emulador-japan.jpg'
    ],
    description: 'Emulador de tipo Japan-Bosh 4 cil',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Manometro.pdf',
    specifications: {
      
    }
  },
  {
    id: '73',
    name: 'Cilindro Ultraliviano',
    price: 500000,
    category: 'cilindros',
    images: [
      'https://i.postimg.cc/XvqjYd21/cilindro-ultra23.jpg',
      'https://i.postimg.cc/wjTHwDdx/cilindros-ultra.jpg',
      'https://i.postimg.cc/T2V6GtdY/cilindro-ultra-2.jpg',
      'https://i.postimg.cc/KvQh3436/cilindr-de-almacenamiento.jpg'
    ],
    description: 'Cilindros ultralivianos de varios diametros 55 lts 50 lts',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Manometro.pdf',
    specifications: {
      
    }
  },
  {
    id: '74',
    name: 'Cilindro en Acero',
    price: 500000,
    category: 'cilindros',
    images: [
      'https://i.postimg.cc/Zq20wwqG/cilindro-acero.jpg',
      'https://i.postimg.cc/W3cTDCz4/cilindro-acero-2.jpg'
      
    ],
    description: 'Cilindros en Acero de varios diametros 40 lts 20 lts',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Manometro.pdf',
    specifications: {
      
    }
  },
  {
    id: '75',
    name: 'Regulador Tercera GNV H-Colombia',
    price: 220000,
    category: 'reguladores',
    images: [
      'https://i.postimg.cc/LsM6QmGT/regulador-h-colombia.jpg'
    ],
    description: 'Regulador h colombia de una salida',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/regulador h colombia.pdf',
    specifications: {
      
    }
      
  },
  {
    id: '76',
    name: 'Valvula de Potencia',
    price: 20000,
    category: 'valvulas',
    images: [
      'https://i.postimg.cc/q7yFvTbz/valvula-de-poteencia.jpg',
      'https://i.postimg.cc/8kt05wHB/valvula-d-potencia-1.jpg',
      'https://i.postimg.cc/HLDSKNYH/valvula-de-potencia-2.jpg'
    ],
    description: 'Valvula de potencia',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de potencia.pdf',
    specifications: {
      
    }
  },
  {
    id: '77',
    name: 'Electrovalvula de Gasolina',
    price: 45000,
    category: 'electronica',
    images: [
      'https://i.postimg.cc/qqVvSnbz/electrovalvula-gasolina.jpg',
      'https://i.postimg.cc/htPPkKrb/electrovalvula-gasolina-1.jpg',
      'https://i.postimg.cc/tTPX3Jqy/electrovalvula-de-gasolina-2.jpg'
    ],
    description: 'Electrovalvula de Gasolina para GNV',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de potencia.pdf',
    specifications: {
      
    }
  },
  {
    id: '78',
    name: 'Multivalvulas',
    price: 50000,
    category: 'glp',
    images: [
      'https://i.postimg.cc/NMmj69RR/multivalvula-240-30.jpg',
      'https://i.postimg.cc/BnzSRcgx/multivalvula-340-30-1.jpg',
      'https://i.postimg.cc/Hx2f1Tgf/accesorios-multivalvula-25.jpg'
    ],
    description: 'Multivalvulas de varias referencias',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Multivalvula Collini.pdf',
    specifications: {
      
    }
  },
  {
    id: '79',
    name: 'Sensor Map 4 pines',
    price: 80000,
    category: 'sensores',
    images: [
      'https://i.postimg.cc/y6w5f0dS/sensro-4-pines-1.jpg',
      'https://i.postimg.cc/s2D0Bcnb/sensor-4-pines-2.jpg',
      'https://i.postimg.cc/2jB9B3wj/sensor-4-pines-3.jpg'
    ],
    description: 'Sensor Map de 4 pines',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Multivalvula Collini.pdf',
    specifications: {
      
    }
  },
  {
    id: '80',
    name: 'Valvula Carga GLP',
    price: 50000,
    category: 'glp',
    images: [
      'https://i.postimg.cc/fLh4VX9d/valvula-carga-glp.jpg',
      'https://i.postimg.cc/DyptqRGn/valvula-carga-glp-2.jpg',
      'https://i.postimg.cc/y89vkGXf/accesorios-valvula-carga-glp.jpg'
    ],
    description: 'Valvula de Carga  de GLP',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '81',
    name: 'Bobina Regulador H-Colombia',
    price: 50000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/BbCcT8nt/BOBINA-REGULADOR-H-COLOMBIA-1.jpg',
      'https://i.postimg.cc/HkN091d0/BOBINA-H-COLOMBIA-2.jpg',
      'https://i.postimg.cc/RF7cm3fG/ACCESORIOS-BOBINA-H-3.jpg'
    ],
    description: 'Bobina Regulador H-Colombia',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '82',
    name: 'Kit Reparacion regulador 5ta',
    price: 80000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/D0ykdXPM/kit-reparacion-regulador-5ta.jpg',
      'https://i.postimg.cc/7YR80bGK/kir-reparacion-5ta-2.jpg',
      'https://i.postimg.cc/wT7nqHfL/accesorios-kit-5ta.jpg'
    ],
    description: 'Kit Resperacion regulador de quinta Hengda',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '83',
    name: 'Kit Reparacion regulador Tercera H-Colombia',
    price: 80000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/pTk81wKL/kit-reparacion-h-colombia.jpg',
      'https://i.postimg.cc/y8qJn12T/kit-reparacion-h-colombia1.jpg',
      'https://i.postimg.cc/vZLmzWrQ/accesorios-kit-h-colombia.jpg'
    ],
    description: 'Kit Resperacion regulador de tecera generacion  H colombia',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '84',
    name: 'Computadora 8 cil Tony OBD',
    price: 550000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/dVfqDrSJ/cpmpu-8-cil-obd-tony-1.jpg',
      'https://i.postimg.cc/15CSYDSD/accesorios-tony-6-cil-obd2.jpg',
      'https://i.postimg.cc/mkZxmg6d/accesorios2-tony-6-cil-obd2.jpg'
    ],
    description: 'Computadora Tony 8 cil OBD',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '85',
    name: 'Tanque Toroidal',
    price: 450000,
    category: 'glp',
    images: [
      'https://i.postimg.cc/jSwSnW9P/cilindro-toroidal.jpg',
      'https://i.postimg.cc/yxhsycKr/cilincrico-y-toroidal.jpg'
    ],
    description: 'Cilindro Toroidal de diferentes diametros',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '86',
    name: 'Tanque Cilindrico',
    price: 450000,
    category: 'glp',
    images: [
      'https://i.postimg.cc/L8Dhpdr0/tanque-cilindrico-glp.jpg',
      'https://i.postimg.cc/yxhsycKr/cilincrico-y-toroidal.jpg'
    ],
    description: 'Tanques cilindricos  de diferentes diametros',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '87',
    name: 'Valvula Tres vias',
    price: 150000,
    category: 'glp',
    images: [
      
    ],
    description: 'Valvulas Tres vias',
    rating: 4.3,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '88',
    name: 'Llave Micro',
    price: 100000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/t47pmVZ2/llave-mircro.jpg',
      'https://i.postimg.cc/hvSq8JR8/LLAVE-MICRO-Y-DIGITAL.jpg'
    ],
    description: 'Llave micro para computadora de quinta generacion',
    rating: 4.5,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '89',
    name: 'Llave Digital',
    price: 100000,
    category: 'accesorios',
    images: [
      'https://i.postimg.cc/ZnkxX353/llave-digital.jpg',
      'https://i.postimg.cc/hvSq8JR8/LLAVE-MICRO-Y-DIGITAL.jpg'
    ],
    description: 'Llave Digital para computadora de quinta generacion',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '90',
    name: 'Computadora Alex 6 cil OBD',
    price: 1100000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/g2HdjFXL/computadora-alex-6-cil.jpg',
      'https://i.postimg.cc/MGLLKdDj/sensor-map-alex-6-cil.jpg',
      'https://i.postimg.cc/yN3PnBmk/cableado-computadora-alex-6-cil-optima.jpg',
      'https://i.postimg.cc/t70yZ9NW/accesorios-computadora-alex-6-cil-optima.jpg'
    ],
    description: 'compuitadora Alex Optima 6 cilindros',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '91',
    name: 'Manguera de Gas',
    price: 30000,
    category: 'mangueras',
    images: [
      'https://i.postimg.cc/gkq3KsxF/manguera-de-gas.jpg'
    ],
    description: 'Manguera de gas para vehiculos GNV/GLP',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '92',
    name: 'Manguera de Gasolina',
    price: 12000,
    category: 'mangueras',
    images: [
      'https://i.postimg.cc/RVKxp6mz/manguera-de-gasolina.jpg'
    ],
    description: 'Manguera de gasolina para vehiculos GNV/GLP',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '93',
    name: 'Manguera de Inyectores',
    price: 12000,
    category: 'mangueras',
    images: [
      'https://i.postimg.cc/k4yHcGrq/MAMGUERA-DE-INYECTORES.jpg'
      
    ],
    description: 'Manguera de Inyectores para vehiculos GNV/GLP',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '94',
    name: 'Manguera GNC 1" x 5.000 PSI x 3 metros',
    price: 1100000,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera GNC 1" x 5.000 PSI x 3 metros Macho-Hembra mas adapatdor loco',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '95',
    name: 'Manguera GNC 1" x 5.000 PSI x 6 metros',
    price: 2000000,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera GNC 1" x 5.000 PSI x 6 metros Macho-Hembra mas adapatdor loco',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '96',
    name: 'Manguera GNC 1" x 5.000 PSI x 12 metros',
    price: 3750000,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera GNC 1" x 5.000 PSI x 12 metros Macho-Hembra mas adapatdor loco',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '97',
    name: 'Manguera  GNV 1/4" x 350 Bar x 4 metros',
    price: 350000,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera de GNC de 1" reforzada con alambre de acero con conexion NPT, engarzadas en ambos extremos',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '98',
    name: 'Manguera  GNV 1/4" x 350 Bar x 3.5 metros',
    price: 320000,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera de GNC de 1" reforzada con alambre de acero con conexion NPT, engarzadas en ambos extremos',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '99',
    name: 'Acople 1" 8H8F8 GNC',
    price: 370500,
    category: 'eds',
    images: [
      
    ],
    description: 'Manguera de GNC de 1" reforzada con alambre de acero con conexion NPT, engarzadas en ambos extremos',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '100',
    name: 'Guaya Antilatigo  para manguera de GNC de 1',
    price: 50000,
    category: 'eds',
    images: [
      
    ],
    description: 'Guaya Antilatigo para manguera de GNC de 1',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '101',
    name: 'Mandril GNV1 para GNV',
    price: 550000,
    category: 'eds',
    images: [
      
    ],
    description: 'Mandril GNV1 para GNV',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '102',
    name: 'Válvulas tres vias de 1/4" NPTF EDS',
    price: 400000,
    category: 'eds',
    images: [
      
    ],
    description: 'Válvulas tres vias de 1/4" NPTF',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '103',
    name: 'Válvula de Seguridad',
    price: 1500000,
    category: 'eds',
    images: [
      
    ],
    description: 'Válvula de seguridad Entrada 3/4" NPT Macho, Salida 1 Hembra',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '104',
    name: 'Válvula de exceso de flujo de 1/2" NPT',
    price: 350000,
    category: 'eds',
    images: [
      
    ],
    description: 'Válvula de exceso de flujo de 1/2" NPT',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
  
    }
  },
  {
    id: '105',
    name: 'Válvula de exceso de flujo de 3/4" NPT',
    price: 460000,
    category: 'eds',
    images: [
      
    ],
    description: 'Válvula de exceso de flujo de 3/4" NPT',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '106',
    name: 'Computadora Tony 4 cil llave micro',
    price: 300000,
    category: 'computadoras',
    images: [
      'https://i.postimg.cc/52nFc3GT/COMPUTADORA-TONY-4-CIL-OBD.jpg',
      'https://i.postimg.cc/QMJYZRss/comoputadora-tony-llave-micro-2.jpg',
      'https://i.postimg.cc/8Cp9c1Zs/SENSOR-MAP.jpg',
      'https://i.postimg.cc/SRCDV5gw/CABLE-COMPUTADORA-TONY-4-CIL-3.jpg',
      'https://i.postimg.cc/mDFw2JWt/ACCESORIOS-COMPU-TONY-4-CIL-2.jpg'
      
    ],
    description: 'Computadora Tony 4 cil llave micro',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
  {
    id: '107',
    name: 'Bicono o virola de 6 mm',
    price: 2000,
    category: 'glp',
    images: [
      
    ],
    description: 'Bicono o virola de 6 mm de uso de glp',
    rating: 4.2,
    inStock: true,
    technicalSheetUrl: '/documents/Valvula de carga GLP.pdf',
    specifications: {
      
    }
  },
 
  
];

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'Todos', icon: 'Grid3X3' },
  { id: 'accesorios', name: 'Accesorios', icon: 'Wrench' },
  { id: 'cilindros', name: 'Cilindros', icon: 'Cylinder' },
  { id: 'computadoras', name: 'Computadoras', icon: 'Cpu' },
  { id: 'electronica', name: 'Electrónica', icon: 'Zap' },
  { id: 'eds', name: 'EDS', icon: 'Zap' },
  { id: 'glp', name: 'GLP', icon: 'Flame' },
  { id: 'kits-quinta', name: 'Kits 5ta Gen', icon: 'Package' },
  { id: 'kits-tercera', name: 'Kits 3ra Gen', icon: 'PackageOpen' },
  { id: 'mangueras', name: 'Mangueras', icon: 'Cable' },
  { id: 'reguladores', name: 'Reguladores', icon: 'Settings' },
  { id: 'rieles', name: 'Rieles', icon: 'Minus' },
  { id: 'sensores', name: 'Sensores', icon: 'Radio' },
  { id: 'tuberias', name: 'Tuberías', icon: 'Pipe' },
  { id: 'valvulas', name: 'Válvulas', icon: 'RotateCcw' }
];