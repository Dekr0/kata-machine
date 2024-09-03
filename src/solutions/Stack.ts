type Node<T> = {
    val: T,
    prev?: Node<T>
}


export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { val: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }

        const tail = this.tail;
        this.tail = this.tail.prev;
        tail.prev = undefined;
        if (!this.tail) {
            this.head = undefined
        }
        this.length--;

        return tail.val;
    }

    peek(): T | undefined {
        return this.tail?.val;
    }
}
