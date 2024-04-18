type Node<T> = {
    val: T,
    next?: Node<T> | undefined,
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { val: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }

        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        if (!this.head) {
            this.tail = undefined;
        }

        this.length--;

        return head.val;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}
