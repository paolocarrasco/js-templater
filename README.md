# js-templater
Micro library to have template texts in JS. It can be used either in Node.js or browser-based projects.

## How to use it
- In order to use the library, it is only needed to copy the ```templater.js``` file in the project.
- Then only use it!

E.g.

```javascript
// In the case of Node.js it would be required to import it before
// var templater = require('path/to/templater.js').templater;

// Cargamos el string
templater.create("paginacion", "Página {{actual}} de {{total}}");

// Obtenemos el string
var str = templater.get("paginacion", {
    actual: 2,
    total: 5
});

// Chequeamos lo que devuelve la funcion get
console.log(str);
// Muestra: "Página 2 de 5"
```

## How to run the tests
- First of all, install Node 0.11+.
- Next step is to execute ```npm install``` in the command line.
- Finally type ```npm test``` and all the tests will be run. Their source code can be found in [the test folder](https://github.com/paolocarrasco/js-templater/blob/master/tests/).
