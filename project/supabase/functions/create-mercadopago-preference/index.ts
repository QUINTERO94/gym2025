/*
  # Función Edge para crear preferencias de pago de Mercado Pago

  Esta función se encarga de:
  1. Recibir los datos del carrito desde el frontend
  2. Crear una preferencia de pago en Mercado Pago
  3. Devolver el init_point para redirigir al usuario al checkout

  ## Variables de entorno requeridas:
  - MERCADO_PAGO_ACCESS_TOKEN: Token de acceso de Mercado Pago (debe ser secreto)

  ## Uso:
  POST /functions/v1/create-mercadopago-preference
  Body: { items: CartItem[], payer?: PayerInfo, back_urls?: BackUrls }
*/

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
}

interface PayerInfo {
  name?: string
  surname?: string
  email?: string
  phone?: {
    area_code?: string
    number?: string
  }
  identification?: {
    type?: string
    number?: string
  }
  address?: {
    street_name?: string
    street_number?: number
    zip_code?: string
  }
}

interface BackUrls {
  success?: string
  failure?: string
  pending?: string
}

interface MercadoPagoItem {
  id: string
  title: string
  description?: string
  picture_url?: string
  category_id?: string
  quantity: number
  currency_id: string
  unit_price: number
}

interface MercadoPagoPreference {
  items: MercadoPagoItem[]
  payer?: PayerInfo
  back_urls?: BackUrls
  auto_return?: string
  payment_methods?: {
    excluded_payment_methods?: Array<{ id: string }>
    excluded_payment_types?: Array<{ id: string }>
    installments?: number
  }
  notification_url?: string
  statement_descriptor?: string
  external_reference?: string
}

serve(async (req) => {
  console.log('Solicitud recibida en la función');
  
  // Manejar preflight CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Verificar que sea una petición POST
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Método no permitido' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Obtener el token de acceso de las variables de entorno
    const accessToken = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN')
    if (!accessToken) {
      console.error('ERROR CRÍTICO: MERCADO_PAGO_ACCESS_TOKEN no está configurado en las variables de entorno de Supabase')
      return new Response(
        JSON.stringify({ error: 'Token de Mercado Pago no configurado. Contacta al administrador.' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Parsear el cuerpo de la petición
    const { items, payer, back_urls } = await req.json()

    // Validar que se enviaron items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Se requieren items para crear la preferencia' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Convertir los items del carrito al formato de Mercado Pago
    const mercadoPagoItems: MercadoPagoItem[] = items.map((item: CartItem) => ({
      id: item.id,
      title: item.name,
      description: item.description || item.name,
      quantity: item.quantity,
      currency_id: 'COP', // Pesos colombianos
      unit_price: item.price,
    }))

    // Construir la preferencia de pago
    const preference: MercadoPagoPreference = {
      items: mercadoPagoItems,
      auto_return: 'approved',
      statement_descriptor: 'GYM SAS',
      external_reference: `order_${Date.now()}`,
    }

    // Agregar información del pagador si se proporciona
    if (payer) {
      preference.payer = payer
    }

    // Agregar URLs de retorno si se proporcionan
    if (back_urls) {
      preference.back_urls = back_urls
    } else {
      // URLs de retorno por defecto
      const baseUrl = req.headers.get('origin') || 'http://localhost:5173'
      preference.back_urls = {
        success: `${baseUrl}/payment/success`,
        failure: `${baseUrl}/payment/failure`,
        pending: `${baseUrl}/payment/pending`,
      }
    }

    // Configurar métodos de pago (opcional)
    preference.payment_methods = {
      installments: 12, // Máximo 12 cuotas
    }

    console.log('Creando preferencia de pago:', JSON.stringify(preference, null, 2))

    // Realizar la petición a la API de Mercado Pago
    const mercadoPagoResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preference),
    })

    if (!mercadoPagoResponse.ok) {
      const errorData = await mercadoPagoResponse.text()
      console.error('ERROR DE MERCADO PAGO - Status:', mercadoPagoResponse.status, 'Respuesta:', errorData)
      
      return new Response(
        JSON.stringify({ 
          error: 'Error al crear la preferencia de pago',
          details: errorData 
        }),
        {
          status: mercadoPagoResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const mercadoPagoData = await mercadoPagoResponse.json()
    
    console.log('Preferencia creada exitosamente:', mercadoPagoData.id)

    // Devolver la respuesta con el init_point
    return new Response(
      JSON.stringify({
        id: mercadoPagoData.id,
        init_point: mercadoPagoData.init_point,
        sandbox_init_point: mercadoPagoData.sandbox_init_point,
        external_reference: preference.external_reference,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error en create-mercadopago-preference:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Error interno del servidor',
        message: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})