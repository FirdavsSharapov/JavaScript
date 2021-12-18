import React from "react";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const myArray = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            myArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return myArray;
    }

    insert(index, value) {
        if (index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index);
        let i = 0;
        while (i !== index) {
            if (i === index) {
                this.prepend(value);
            }
            i++;
        }
        return this;
    }
}

export default function fLinkedList() {
    const myLinkedList = new LinkedList(10);
    myLinkedList.append(16);
    myLinkedList.append(5);
    console.log(myLinkedList);
    myLinkedList.prepend(2);
    console.log(myLinkedList);
    myLinkedList.insert(2,33);
    console.log(myLinkedList.printList())
    return (<div></div>);
}