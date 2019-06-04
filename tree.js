
class Node {
  constructor (type, value) {
    this.type = type;
    this.value = value;
    this.children = [];
  }
  
  addChild (child) {
    this.children.push(child);
    child.parent = this;
  }
}

class Tree extends Node {
  constructor () {
    this.pointer = this;
    super("root");
  }
  
  
  ascend () {
    this.pointer = this.pointer.parent;
  }
  
  addChild (child, descend) {
    if(this.pointer == this) {
      this.children.push(child);
      child.parent = this;
    } else {
      this.pointer.addChild(child);
    }
    if(descend) {
      this.pointer = child;
    }
  }
}

module.exports = {
  Tree: Tree,
  Node: Node
};