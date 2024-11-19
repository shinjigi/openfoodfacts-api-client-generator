const fs = require("fs");
const {
  parse,
} = require("@swagger-api/apidom-parser-adapter-openapi-yaml-3-1");
//const { OpenApi31 } = require('@swagger-api/apidom-reference/configuration');
const { OpenAPI31 } = require("@swagger-api/apidom-reference");
const debug = require("@swagger-api/apidom-core/debug");

async function parseOpenAPI() {
  try {
    const yamlContent = fs.readFileSync("api.yaml", "utf8");
    const parseResult = await parse(yamlContent);

    console.log("Parsed OpenAPI Document:");
    console.log(JSON.stringify(parseResult.api, null, 2));

    // Esempio di accesso a specifiche parti del documento
    console.log("\nAPI Title:", parseResult.api.info.title);
    console.log("API Version:", parseResult.api.info.version);
    console.log("Available Paths:", Object.keys(parseResult.api.paths));
  } catch (error) {
    console.error("Error parsing OpenAPI document:", error);
  }
}

async function validateOpenAPI() {
  try {
    //debug.enable('swagger-api:*');

    // const yamlContent = fs.readFileSync('api.yaml', 'utf8');
    // const yamlContent = fs.readFileSync('../.../../api-external/openfoodfacts/ref/api.yml', 'utf8');
    const yamlContent = fs.readFileSync(
      "../../openapi/openapi/openapi.yaml",
      "utf8"
    );
    const parseResult = await parse(yamlContent);

    const openapi31 = OpenAPI31.create();
    const validationResult = await openapi31.validate(parseResult.api);

    if (validationResult.valid) {
      console.log("Il documento OpenAPI è valido.");
    } else {
      console.log("Il documento OpenAPI non è valido:");
      validationResult.errors.forEach((error, index) => {
        console.log(`Error ${index + 1}:`, error.message);
      });
    }
  } catch (error) {
    console.error("Errore durante parsing/validazione:", error);
  }
}

// parseOpenAPI();

validateOpenAPI();
