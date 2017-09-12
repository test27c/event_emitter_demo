// contructor for Emitter object
 function Emitter() {
   this.events = {};
 }

//  Add 'on' function for Emitter prototype and push the listener
 Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
 }

//  Emit all events for every listener for every listener in Emitter events object 
 Emitter.prototype.emit = function(type) {
   if (this.events[type]) 
    this.events[type].forEach(listener => listener());
 }

 module.exports = Emitter;