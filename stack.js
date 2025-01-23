class Stack {
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(data) {
        this.stack.push(data)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.stack[this.stack.length -1]
    }
}