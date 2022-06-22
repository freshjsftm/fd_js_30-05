class LinkedListIterator{
  constructor(list){
    this.collection = list;
    this.currentItem = null;
  }

  next(){
    this.currentItem = this.currentItem ? this.currentItem.next : this.collection.head;
    return {
      value: this.currentItem ? this.currentItem.value : undefined,
      done: !this.currentItem,
    }
  }
};

class ListItem{
  constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get value(){
    return this._value;
  }
  set value(value){
    this._value = value;
  }
};

class LinkedList{
  constructor(...values){ //items->Array!!!
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (const value of values) {
      this.push(value);
    }
  }
  push(value){
    const newItem = new ListItem(value);
    if(this.length === 0){
      this.head = newItem;
      this.tail = newItem;
    }else{
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    return ++this.length;
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
};

const list1 = new LinkedList(1, 'wqe', true, {}, 777, 'asd');
console.log(...list1)
for (const itemValue of list1) {
  console.log(itemValue)
}