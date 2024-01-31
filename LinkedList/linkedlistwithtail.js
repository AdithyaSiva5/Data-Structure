class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null 
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size;
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = list.head
            let listvalues = ''
            while(curr){
                listvalues += ` ${curr.value}`
                curr = curr.next
            }
            console.log("List Values : ",listvalues)
        }
    }
}

const list = new LinkedList()
console.log("Is empty ?",list.isEmpty())
console.log("Size",list.getSize())