## @iside/ac-open-food-facts-client-ts-fetch@1.189.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
pnpm install
pnpm run build
```

### Publishing

First build the package then run `pnpm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
pnpm install @iside/ac-open-food-facts-client-ts-fetch@1.189.0 --save
```

_unPublished (not recommended):_

```
pnpm install PATH_TO_GENERATED_PACKAGE --save
```
