class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++;
    }

    print(){
        let curr = this.head;
        let list = ''
        while(curr){
            list += ` ${curr.value}`
            curr = curr.next
        }
        return list;
    }
    reverse(){
        if(this.size === 0){
            return  
        }
        let curr = this.head;
        let prev= null;
        while(curr){
            let nextnode = curr.next;
            curr.next = prev;
            prev = curr
            curr = nextnode
        }
        this.head = prev
    }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.size)
list.prepend(4);
list.prepend(8);
list.reverse()
console.log(list.print())