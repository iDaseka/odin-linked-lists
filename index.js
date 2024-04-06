class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    } // adds a new node at the end of the list
    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    } // adds a new node at the start of the list
    size(){
        let current = this.head;
        let count = 0;
        while(current !== null){
            count++;
            current = current.nextNode;
        }
        return count;
    } // returns the total of nodes in the list
    head(){
        return this.head;
    } // returns the first node in the list
    tail(){
        let current = this.head;
        let last = null;
        while(current !== null){
            last = current;
            current = current.nextNode;
        }
        return last;
    } // returns the last node in the list
    at(index){
        let current = this.head;
        for(let i = 0; i < index; i++){
            if(current === null){
                return null;
            }
            current = current.nextNode;
        }
        return current;
    } // returns the node at the given index
    pop(){
        if(!this.head){
            return;
        }

        let current = this.head;
        let prev = null;
        while(current.nextNode !== null){
            prev = current;
            current = current.nextNode;
        }

        if (prev === null){
            this.head = null;
        }
        else{
            prev.nextNode = null;
        }
    } // removes the last element from the list
    contains(value){
        let current = this.head;
        while(current !== null){
            if(current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    } // returns true if the passed in value is in the list and otherwise returns false
    find(value){
        let current = this.head;
        let index = 0;
        while(current !== null){
            if(current.value === value){
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    } // returns the index of the node containing value, or null if not found
    toString(){
        let string = "";
        let current = this.head;
        while(current !== null){
            string += current.value.toString();
            if (current.nextNode !== null){
                string += " -> ";
            }
            current = current.nextNode;
        }
        return string;
    }// represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    insertAt(value, index){
        let current = this.head;
        let pos = 0;
        while(current !== null){
            if(pos === index){
                const newNode = new Node(value);
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;
                break;
            }
            pos++;
            current = current.nextNode;
        }
    }// inserts a new node with the provided value at the given index
    removeAt(index){
        let current = this.head;
        let prev = null;
        for(let i = 0; current && i <= index; i++){
            prev = current;
            current = current.nextNode;
        }
        if (current){
            prev.nextNode = current.nextNode;
        }
    }// removes the node at the given index
}