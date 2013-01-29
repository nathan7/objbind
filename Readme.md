objbind
=======
objbind takes an object and returns an object that inherits from it with all the enumerable functions bound to the first object.
confused? here's an example:
```javascript
var winston = require('winston')
  , objbind = require('objbind')
  , myWinston = objbind(winston, 'nathan says')
myWinston.info('hi')
console.log(myWinston.loggers === winston.loggers)
```

output:

    info: nathan says hi
    true


objbind(obj, args...)
---------------------
newObj = Object.create(obj)
for each enumerable function property of obj, assign fn.bind(obj, args...) to the same key on newObj
return newObj
``
