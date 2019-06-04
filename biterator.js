var logger = require('./logs.js');

class BIterator {
  constructor(array){
    this.pos = -1;
    this.ar = array;
    this.rollbacks = [];
    this.length = array.length;
    this.done = ((this.pos + 1) >= this.length);
  }
  
  next() {
    if(this.done){
      return false;
    }
    this.pos++;
    this.done = ((this.pos + 1) >= this.length);
    this.current = this.ar[this.pos];
    logger.debug("Called next: " + this.current);
    return this.current;
  }
  
  peek(number) {
    number = number | 1;
    logger.debug("Called peek: " + this.ar[this.pos + number]);
    return this.ar[this.pos + number];
  }
  
  snap() {
    this.rollbacks.push(this.pos);
  }
  
  rollback() {
    this.pos = this.rollbacks.pop();
    this.done = ((this.pos + 1) >= this.length);
  }
}
module.exports = BIterator;