function Node(val, prev, next) {
  this.val = val
  this.prev = prev
  this.next = next
}

function BiLinkList() {
  this.front = null
  this.rear = null
}
BiLinkList.prototype.enqueue = function(val) {
  let node = new Node(val, null, null)
  if (this.rear) {
    this.rear.next = node
    node.prev = this.rear
    this.rear = node
  } else {
    this.front = this.rear = node;
  }
}

BiLinkList.prototype.dequeue = function() {
  let pop = undefined
  if (this.front) {
    if (this.front === this.rear) {
      pop = this.front
      this.front = this.rear = null
    } else {
      pop = this.front
      this.front = this.front.next
      this.front.prev = null
    }
  }
  return pop
}