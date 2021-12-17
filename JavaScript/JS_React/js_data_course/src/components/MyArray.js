export default class MyAray {
    constructor() {
        this.lenght = 0; // holds account for the lenght of the array
        this.data = {} // array abject
    }

    // Get function of the array
    get(index) {
        return this.data[index];
    }

    // Push function to the array
    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.lenght;
    }
    // remove last element from the array
    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }

    delete(index) {
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.lenght - 1];
        this.lenght--;
    }

}