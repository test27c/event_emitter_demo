var Emitter = require('./emitter');
// Contruct Emitter Object
var emtr = new Emitter();

// on events is triggered multiple times
emtr.on('greet', function() {
  console.log('Somewhere, someone said Hola!')
});

emtr.on('greet', function() {
  console.log('Again, someone is greeted me.')
})

// emit is occured, call all the listener in the array  
emtr.emit('greet');