# recursive-mkdir
Simple way of creating directories recursively

### Installation
npm install recursive-mkdir

### Usage
```javascript
var recmkdir = require('recursive-mkdir');
```
### Asynchronous
```javascript
var path = 'D:/out/in'
recmkdir.recMkdirAsync(path, function (err) {
    if (err) {
     	console.log(err); 
    }
    else { 
    	console.log("Directory created");
    }
});
```

### Synchronous
```javascript
recmkdir.recMkdirSync(path);
```