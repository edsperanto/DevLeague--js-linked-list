/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function _getHead() {
    return head;
  }

  function _getTail() {
    var curNode = head;
    while(curNode !== null && curNode.next !== null) {
      curNode  = curNode.next;
    }
    return curNode;
  }

  function _add(value) {
    var tail = _getTail();
    var newNode = {
      value: value,
      next: null
    };
    if(tail === null) {
      head = newNode;
    }else{
      tail.next = newNode;
    }
    return newNode;
  }

  function _remove(number) {
  }

  function _get(number) {
    var curNode = head;
    for(var i = 0; i < number; i++) {
      if(curNode.next === null) {
        return false;
      }
      curNode = curNode.next;
    }
    return curNode;
  }

  function _insert(value, number) {

  }

  return {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    remove: _remove,
    get: _get,
    insert: _insert
  };

}

var ll = linkedListGenerator();