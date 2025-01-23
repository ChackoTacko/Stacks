class ArrayStack {
    constructor(size) {
        this.stack = new Array(size);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(data) {
        if (this.top === this.stack.length - 1) {
           throw new Error("Stack is full");
        }

        this.stack[++this.top] = data;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        
        const data = this.stack[this.top];
        this.stack[this.top--] = null;

        return data
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        return this.stack[this.top];
    }
}