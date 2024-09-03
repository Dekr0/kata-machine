type Node<T> = {
    val: T,
    next?: Node<T>
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { val: item } as Node<T>;
        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1 && curr; i++) {
            curr = curr.next;
        }

        const node = { val: item } as Node<T>;
        if (curr !== undefined) {
            const next = curr?.next;
            curr.next = node;
            node.next = next;
            this.length++;
        }
    }

    append(item: T): void {
        const node = { val: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node; 
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = undefined;
        while (curr && curr.val !== item) {
            prev = curr;
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }

        this.length--;
        // Deal with head
        if (prev !== undefined) {
            prev.next = curr.next;
        } else {
            this.head = curr.next;
        }

        // Deal with tail
        if (curr.next !== undefined) {
            curr.next = undefined;
            return curr.val;
        }

        return curr.val;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.val;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) return undefined;

        let curr = this.head;
        let prev = undefined;
        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;
        // Deal with head
        if (prev !== undefined) {
            prev.next = curr.next;
        } else {
            this.head = curr.next;
        }

        // Deal with tail
        if (curr.next !== undefined) {
            curr.next = undefined;
            return curr.val;
        }

        return curr.val;
    }

    reverse() {
        let prev: Node<T> | undefined = undefined;
        let curr: Node<T> | undefined = this.head; 
        let next: Node<T> | undefined = this.head?.next;
        while (curr) {
            curr.next = prev;
            curr = next;
            prev = curr;
            next = curr?.next;
        }
    }
}
