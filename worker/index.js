export default {
  async fetch(request, env, ctx) {
    const allowedOrigins = [
      'https://drbaph.is-a.dev',
      'https://drbaph.is-a.dev/Ace-Step-Web',
      'http://localhost:8000',
      'http://127.0.0.1:8000',
      'file://'
    ];

    const origin = request.headers.get('Origin') || '';
    const isAllowed = allowedOrigins.some(o => origin.startsWith(o)) || !origin;

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(isAllowed ? origin : allowedOrigins[0])
      });
    }

    if (!isAllowed) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
      });
    }

    const apiKey = env.ACESTEP_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured in worker' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
      });
    }

    try {
      const body = await request.json();
      
      const response = await fetch('https://api.acemusic.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'User-Agent': 'AceMusic-WebUI/1.0 (via Cloudflare Worker)'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
        });
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
      });
    }
  }
};

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
