# Open Food Facts Clients

Client library generation for Open Food Facts API integration, based on a forked version of the OpenFoodFacts API specification.

## Overview

This project focuses on generating type-safe API clients from OpenAPI (Swagger) specifications, primarily for TypeScript and JavaScript environments. It uses a custom fork of the OpenFoodFacts API specification available at [shinjigi/openfoodfacts-server/altroconsumo](https://github.com/shinjigi/openfoodfacts-server/tree/altroconsumo).

## Core Technologies

### API Documentation & Testing

- **Swagger UI** (v4.x) - Interactive API documentation and testing interface
- **Redocly CLI** (v1.25.8) - API documentation generation and linting
- **RapiDoc** - Alternative API documentation viewer

### Client Generation

- **@openapitools/openapi-generator-cli** (v2.15.3) - Main tool for generating API clients
  - Supports multiple output formats including TypeScript, JavaScript, and TypeScript-Fetch
  - Version 7.9.0 of the core generator is used (configured in openapitools.json)

### Client Types

The project can generate several types of API clients:

1. **TypeScript Fetch** (`gen:ts-fetch`)

   - Modern fetch-based HTTP client
   - Full TypeScript support with type definitions
   - Built-in request/response type validation

2. **TypeScript Axios** (`gen:ts`)

   - Axios-based HTTP client
   - Complete TypeScript type definitions
   - Robust error handling

3. **JavaScript** (`gen:js`)
   - Pure JavaScript implementation
   - Compatible with Node.js and browser environments

### Alternative Generators

Additional experimental generators are included:

- **@hey-api/openapi-ts** - Alternative TypeScript client generator
- **openapi-typescript** - TypeScript type generation

## Prerequisites

- Node.js
- pnpm
- OpenAPI Generator CLI

## Available Scripts

### Client Generation

- `pnpm gen:ts-fetch` - Generate TypeScript Fetch client
- `pnpm gen:ts` - Generate TypeScript client
- `pnpm gen:js` - Generate JavaScript client
- `pnpm gen:api` - Generate OpenAPI YAML
- `pnpm gen:hei-api` - Generate client using @hey-api/openapi-ts
- `pnpm gen:openapi-typescript` - Generate TypeScript types

### Documentation

- `pnpm redocly` - Generate API documentation using Redocly
- `pnpm redocly:lint` - Lint OpenAPI specification
- `pnpm swagger-run` - Run Swagger UI locally
- `pnpm swagger-copy` - Sync API specifications from external source
- `pnpm redocly:unified` - Generate unified documentation

### Build

- `pnpm build:tsfetch` - Build TypeScript Fetch client
- `pnpm gen-build:tsfetch` - Generate and build TypeScript Fetch client
- `pnpm gen-build:tsfetch:api:redocly` - Complete workflow that:

  - Generates TypeScript Fetch client with post-processing
  - Builds the generated client
  - Creates OpenAPI specification files
  - Runs Redocly linting
  - Generates API documentation

  This command ensures all components (client, API spec, and documentation) are in sync.

### Development Tools

- `pnpm dependencies:madge` - Generate dependency graph
- `pnpm openapitools:version:snap` - List available snapshot versions of openapi-generator-cli

## Project Structure

```
├── clients/
│   ├── ts-fetch/     # TypeScript Fetch client
│   ├── openapi-ts/   # Alternative TypeScript client
├── docs/
│   ├── swagger-ui/   # Swagger UI documentation
│   ├── rapidoc/      # RapiDoc documentation
│   ├── redocly/      # Redocly generated documentation
├── openapi/          # OpenAPI specifications
```

## Configuration Files

- `openapi-generator-tsfetch.config.yaml` - TypeScript Fetch client generation settings

  - Configures NPM package details
  - Sets model name mappings
  - Defines generator options

- `redocly.yaml` - Redocly documentation configuration

  - API version configuration
  - Linting rules
  - Documentation generation settings

- `openapitools.json` - OpenAPI Generator CLI configuration

  - Generator version control
  - Global settings

- `pnpm-workspace.yaml` - Workspace configuration for monorepo structure

## API Synchronization

The project uses a forked version of the OpenFoodFacts API specification. To update the local API definition:

1. Run `pnpm swagger-copy` to sync from the external source
2. Run `pnpm swagger-run` to start the Swagger UI and verify the updated specification. If you use wsl you should use one of:
   - http://localhost:8080
   - http://`<wsl-ip>`:8080
3. Generate new clients using the appropriate generation commands

## Author

Shinjigi
