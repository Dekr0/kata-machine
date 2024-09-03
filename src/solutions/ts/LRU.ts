type Node<V> = {
    v: V
    next: Node<V> | undefined; 
    prev: Node<V> | undefined;
}

export default class LRU<K, V> {
    private map: Map<K, Node<V>>;
    private reverse_map: Map<Node<V>, K>;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;
    private capc: number;
    private size: number;

    public constructor(capc: number) {
        this.map = new Map<K, Node<V>>();
        this.reverse_map = new Map<Node<V>, K>();
        this.head = undefined;
        this.tail = undefined;
        this.capc = capc;
        this.size = 0;
    }

    public get(k: K): V | undefined {
        if (this.size === 0) return undefined;

        if (!this.map.has(k)) return undefined;

        const node = this.map.get(k) as Node<V>;

        if (node === this.head) return node.v;

        if (node === this.tail) {
            if (!node.prev) throw Error("Exception occurs");

            this.tail = node.prev; 
            this.tail.next = undefined;
        } else {
            if (!node.prev) throw Error("Exception occurs");
            if (!node.next) throw Error("Exception occurs");

            node.prev.next = node.next; 
            node.next.prev = node.prev;
        }

        if (!this.head) throw Error("Exception occurs");

        this.head.prev = node;
        node.next = this.head;
        this.head = node;

        return node.v;
    }

    public update(k: K, v: V): void {
        if (this.size === 0) { this.prepend(k, v); return; }

        if (!this.map.has(k)) { this.prepend(k, v); return; }

        const node = this.map.get(k) as Node<V>;
        node.v = v;

        if (node === this.head) return; 

        if (node === this.tail) {
            if (!node.prev) throw Error("Exception occurs");

            this.tail = node.prev;
            this.tail.next = undefined;
        } else {
            if (!node.prev) throw Error("Exception occurs");
            if (!node.next) throw Error("Exception occurs");

            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        if (!this.head) throw Error("Exception occurs");

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    private prepend(k: K, v: V): void {
        const node: Node<V> = { v: v, next: undefined, prev: undefined };
        
        this.map.set(k, node);
        this.reverse_map.set(node, k);

        if (this.size === 0) { 
            this.head = this.tail = node;
            this.size = this.size + 1;
            return;
        }

        if (this.size === this.capc) {
            if (!this.tail) throw Error("Exception occurs");
            
            if (!this.reverse_map.has(this.tail)) throw ("Exception occurs");

            const tail_key = this.reverse_map.get(this.tail) as K;

            this.reverse_map.delete(this.tail);
            this.map.delete(tail_key);

            if (this.capc === 1) {
                this.head = this.tail = undefined;
            } else {
                if (!this.tail.prev) throw Error("Exception occurs");

                this.tail = this.tail.prev;
                this.tail.next = undefined;
            }
        } else {
            this.size = this.size + 1;
        }

        if (!this.head) throw Error("Exception occurs"); 

        node.next = this.head;
        this.head.prev = node;
        this.head = node; 
    }
}
