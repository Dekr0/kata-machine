type Node<T> = {
    next : Node<T> | undefined
    value: T
};

export default class Queue<T> {
    public length: number;

    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head   = this.tail = undefined;
        this.length = 0;
    }

    public enqueue(item: T): void {
        const node: Node<T> = { next: undefined, value: item };
        if (!this.length) { // There should be more negative assertion since it's JS.
            this.head = this.tail = node;
        } else {
            if (!this.tail) throw Error("Length is not zero but tail is undefined");
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
    }

    public deque(): T | undefined {
        if (this.length === 0) { // There should be more negative assertion.
            return undefined;
        }
        if (!this.head) throw Error("Length is not zero but head is undefined");
        const value = this.head.value;
        if (this.length === 1) { // There should be more negative assertion.
            this.head = this.tail = undefined;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return value;
    }

    public peek(): T | undefined {
        return this.head?.value;
    }
}
