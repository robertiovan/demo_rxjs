
System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "noImplicitAny": false,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "inlineSourceMap": true,	
	"target": "es5",
	"experimentalDecorators": true,
	"emitDecoratorMetadata": true
    
  },
  packages: {
    "src": {
      "defaultExtension": "ts",
	  "main":"app",
      "meta": {
        '*.css': { loader: 'css' }
        }
    },
	 "node_modules/rxjs":{
                    "defaultExtension": "js",
                    "main":"rx"
                }
  },
  map: {
    "lodash":"node_modules/lodash/lodash.js",
    "rxjs":"node_modules/rxjs",
    "typescript":"node_modules/typescript/lib/typescript.js"
  }
});