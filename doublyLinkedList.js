/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var ll = null;

  function _getHead() {
    return ll;
  }

  function _getTail() {
    var curNode = ll;
    if(curNode !== null) {
      while(curNode.next !== null) {
        curNode = curNode.next;
      }
    }
    return curNode;
  }

  function _add(value) {
    var curNode = _getTail();
    var newNode = {
      value: value,
      next: null
    };
    if(ll === null) {
      ll = newNode;
    }else{
      curNode.next = newNode;
    }
    return newNode;
  }

  function _remove(number) {

  }

  function _get(number) {

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