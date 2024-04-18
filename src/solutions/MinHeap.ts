export default class MinHeap {

    public length: number;

    private heap: number[];

    constructor() {
        this.heap = [];
        this.length = 0;
    }

    public toArray(): number[] {
        return Array.from(this.heap);
    }

    public traverse(): void {
        if (this.heap.length === 0) return;

        const nodes: number[] = [0];

        while (nodes.length > 0) {
            const node = nodes.pop();
            if (node !== undefined) {
                console.log(node, this.heap[node]);

                const left = this.left(node);
                const right = this.right(node);

                if (left < this.heap.length) nodes.push(left);
                if (right < this.heap.length) nodes.push(right);
            } else {
                throw new Error("Something goes very wrong in traverse and heap implementation");
            }
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left(idx: number): number {
        return idx * 2 + 1;
    }

    private right(idx: number): number {
        return idx * 2 + 2;
    }

    // Heapify up
    private up(idx: number): void {
        let parent = this.parent(idx);

        // idx is zero => no need to heapify up
        // continue heapify up if the current node is less than the parent node
        while (idx > 0 && this.heap[parent] > this.heap[idx]) {
            const tmp = this.heap[parent];
            this.heap[parent] = this.heap[idx]; // move current node to parent node (up)
            this.heap[idx] = tmp;  // move parent node to the current node (down)
            idx = parent;
            parent = this.parent(idx);
        }
    }

    // Heapify down
    private down(idx: number): void {
        while (idx < this.heap.length) {
            const left = this.left(idx);
            const right = this.right(idx);
            if (left > this.heap.length) return;  // No more child node

            const min = right < this.heap.length && this.heap[right] < this.heap[left] 
                ? right 
                : left;

            // No need to heapify down if the current node is less than min of two child node
            // Heap condition is hold in this current node
            if (this.heap[idx] < this.heap[min]) return;

            const tmp = this.heap[idx];
            this.heap[idx] = this.heap[min];
            this.heap[min] = tmp;
            
            idx = min;
        }
    }

    insert(value: number): void {
        this.heap[this.heap.length] = value;

        // length should increment after heapify up to prevent access out of bound
        // e.g. length is 0 => insert => length is 1 but there's no element in heap[1]
        // instead of heap[0]
        this.up(this.heap.length - 1);
        this.length = this.heap.length;
    }

    // Pop() / Poll() => Remove the top of the heap
    delete(): number {
        let top = NaN;

        if (this.heap.length === 0) return top;


        top = this.heap[0];
        const tail = this.heap.pop(); 
        this.length = this.heap.length;
        if (tail !== undefined) {
            this.heap[0] = tail;
            if (this.heap.length > 1) {
                this.down(0);
            }
        } else {
            throw new Error("Something goes very wrong in delete and the heap implementation");
        }

        return top;
    }

    peek(): number {
        return this.length === 0 ? NaN : this.heap[0];
    }
}
