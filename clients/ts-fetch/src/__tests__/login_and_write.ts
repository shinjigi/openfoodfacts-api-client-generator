// Se stai usando Node.js, potresti aver bisogno di importare un polyfill per fetch
// import fetch from 'node-fetch';

// URL di base per l'API di Open Food Facts

// Definisci l'interfaccia per i dati del prodotto
interface AuthData {
  app_name: string;
  app_version: string;
  app_uuid: string;
  email: string;
}

interface ProductData extends AuthData {
  code: string;
  nutriment_sodium: string;
  nutriment_sodium_unit: string;
}

//process.env.NODE_ENV
const NODE_ENV = 'development';

const BASE_URL = NODE_ENV === 'development' ? "https://world.openfoodfacts.net" : "https://world.openfoodfacts.org";

// Interfaccia per il cookie di sessione
interface SessionCookie {
  [key: string]: string;
}

// Funzione per effettuare il login e ottenere il cookie di sessione
async function login(username: string, password: string): Promise<SessionCookie> {
  const loginUrl = `${BASE_URL}/cgi/session.pl`;
  const loginData = new URLSearchParams({
    user_id: username,
    password: password,
  });

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: loginData,
      credentials: 'include',
    });

    if (response.ok) {
      const cookies = response.headers.get('set-cookie');
      if (cookies) {
        const sessionCookie: SessionCookie = {};
        cookies.split(', ').forEach(cookie => {
          const [name, value] = cookie.split(';')[0].split('=');
          sessionCookie[name] = value;
        });
        return sessionCookie;
      }
    }
    console.error("Login fallito");
    console.error("Response status:", response.status);
    console.error("Response headers:", response.headers);

    const responseBody = await response.text();
    //console.error("Response body:", responseBody);

    const significantWords = ["user", "password", "error"];
    const lines = responseBody.split('\n');
    const contextLines = 3;

    significantWords.forEach(word => {
      lines.forEach((line, index) => {
        if (line.includes(word)) {
          const start = Math.max(0, index - contextLines);
          const end = Math.min(lines.length, index + contextLines + 1);
          console.log(`Context for "${word}":`);
          console.log(lines.slice(start, end).join('\n'));
        }
      });
    });
    throw new Error("Login fallito");
  } catch (error) {
    throw new Error(`Errore durante il login: ${error}`);
  }
}

// Funzione per effettuare una richiesta autenticata
async function authenticatedRequest<T extends AuthData>(
  sessionCookie: SessionCookie,
  endpoint: string,
  method: 'GET' | 'POST' = 'GET',
  data?: T
): Promise<Response> {
  const url = `${BASE_URL}${endpoint}`;
  const headers: HeadersInit = {
    'User-Agent': `${data?.app_name}/${data?.app_version} (${data?.email})`,
    'Cookie': Object.entries(sessionCookie).map(([key, value]) => `${key}=${value}`).join('; '),
  };

  const config: RequestInit = {
    method,
    headers,
    credentials: 'include',
  };

  if (method === 'POST' && data) {
    config.body = new URLSearchParams(data as any);
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    throw new Error(`Errore nella richiesta: ${error}`);
  }
}

// Esempio di utilizzo
async function main() {
  const username = "altroconsumo";
  const password = "*******";

  if (!username || !password) {
    throw new Error("Username e password non possono essere vuoti");
  }

  try {
    // Effettua il login e ottieni il cookie di sessione
    const sessionCookie = await login(username, password);
    console.log("Login effettuato con successo");

    // Esempio di richiesta autenticata per modificare un prodotto

    const productData: ProductData = {
      code: "3017620422003", // Barcode di Nutella
      nutriment_sodium: "0.0427",
      nutriment_sodium_unit: "g",
      app_name: "Altroconsumo Food PWA",
      app_version: "1.0",
      app_uuid: "12345-67890-abcde-fghij",
      email: "openfoodfact@altroconsumo.it"
    };

    const response = await authenticatedRequest(sessionCookie, "/cgi/product_jqm2.pl", "POST", productData);
    const responseData = await response.json();

    console.log("Prodotto aggiornato con successo");
    console.log(responseData);

  } catch (error) {
    console.error(`Si è verificato un errore: ${error}`);
  }
}

main();