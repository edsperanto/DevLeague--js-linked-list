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

  function _get(number) {
    var curNode = head;
    for(var i = 0; i < number; i++) {
      curNode = curNode.next;
      if(curNode === null) {
        return false;
      }
    }
    return curNode;
  }

  function _remove(number) {
    var prevNode = _get(number-1);
    var curNode = _get(number);
    var nextNode = curNode.next;

    if(head === null || curNode === false) { // if linked list is empty, or if node to be removed is null
      return false;
    }else if(number === 0) { // if removing first node
      head = head.next;
    }else{ // if node to be removed exists
      prevNode.next = nextNode;
    }
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