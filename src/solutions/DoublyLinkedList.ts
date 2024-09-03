type TNode<T> = {
    val: T,
    next?: TNode<T>,
    prev?: TNode<T>
};

export default class DoublyLinkedList<T> {
    public length: number;

    public head?: TNode<T>;
    public tail?: TNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 && idx >= this.length) return undefined;

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr?.val;
    }

    peek(): T | undefined {
        return this.head?.val;
    }

    prepend(item: T): void {
        const node = { val: item } as TNode<T>;
        
        this.length++;

        if (!this.head && !this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        if (this.head) this.head.prev = node;
        this.head = node;
    }

    append(item: T): void {
        const node = { val: item } as TNode<T>;

        this.length++;

        if (!this.head && !this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        if (this.tail) this.tail.next = node;
        this.tail = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 && idx >= this.length) return;

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length - 1) {
            this.append(item);
            return;
        }

        const node = { val: item } as TNode<T>;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        node.next = curr;
        if (curr && curr.prev) {
            node.prev = curr.prev;
            curr.prev.next = node;
            curr.prev = node;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        // Two Major Cases:
        // length = 1
        // length > 1
        // 
        // For each major case, three sub-cases
        //   Remove the head
        //   Remove the tail
        //   Remove in the middle
        for (let i = 0; curr && i < this.length; i++) {
            const val = curr.val;
            if (val === item) {
                this.length--;
                if (this.length === 0) { // length = 1
                    curr.next = undefined;
                    curr.prev = undefined;
                    this.head = this.tail = undefined;
                    return val;
                }

                // length > 1
                if (i === 0) { // Remove the head
                    this.head = curr.next; 
                } else if (i === this.length) { // Remove the tail
                    this.tail = curr.prev;
                } else if (curr.prev && curr.next) {
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }
                curr.next = undefined;
                curr.prev = undefined;
                return val;
            }
            curr = curr.next;
        }

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 && idx >= this.length) return undefined;

        let curr = this.head;
        let i = 0;
        for (i = 0; curr && i < idx; i++) {
           curr = curr.next;
        }

        if (curr) {
            const val = curr.val;
            this.length--;
            if (this.length === 0) { // length = 1
                curr.next = undefined;
                curr.prev = undefined;
                this.head = this.tail = undefined;
                return val;
            }

            // length > 1
            if (i === 0) { // Remove the head
                this.head = curr.next; 
            } else if (i === this.length) { // Remove the tail
                this.tail = curr.prev;
            } else if (curr.prev && curr.next) {
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
            }
            curr.next = undefined;
            curr.prev = undefined;
            return val
        }

        return undefined;
    }
}
