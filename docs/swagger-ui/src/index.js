import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

//import { parse, detect } from '@swagger-api/apidom-parser-adapter-openapi-yaml-3-1';


// const spec = require('./swagger-config.yaml');
// const spec = require('../../../fork-off-4pullrequest-api-ref/api.yml');
const spec = require('./api-ref/api.yml');
// const spec = require('../../../openapi/openapi/openapi.yaml');

/*
// detecting
await detect('openapi: 3.1.0'); // => true
await detect('test'); // => false

// parsing
let parseResult = await parse('openapi: 3.1.0', { sourceMap: true });
console.log(parseResult); 

parseResult = await parse(spec, { sourceMap: true });
console.log(parseResult); */


const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
  syntaxHighlight: 'monokai'
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: 'implicit'
});
