export default class MinHeap {
    public arr: number[];
    public length: number;
    
    public constructor() {
        this.arr = [];
        this.length = 0;
    }

    private root(leaf: number): number { return Math.floor(leaf / 2); }

    private left(root: number): number { return root * 2 + 1; }

    private right(root: number): number { return root * 2 + 2; }

    private heapify_down(root: number): void {
        do {
            let minIdx = this.left(root);

            if (minIdx >= this.length) return;

            const right = this.right(root);

            minIdx = right < this.length && this.arr[right] < this.arr[minIdx] 
                ? right 
                : minIdx;

            if (this.arr[root] < this.arr[minIdx]) return;

            this.swap(minIdx, root);

            root = minIdx;
        } while(true);
    }

    private heapify_up(leaf: number): void {
        let root = this.root(leaf);
        while (root >= 0 && this.arr[leaf] < this.arr[root]) {
            this.swap(leaf, root);
            leaf = root;
            root = this.root(leaf);
        }
    }

    private swap(srcIdx: number, destIdx: number): void {
        const dest = this.arr[destIdx];
        this.arr[destIdx] = this.arr[srcIdx];
        this.arr[srcIdx] = dest;
    }

    public insert(v: number): void {
        this.arr[this.length++] = v;

        if (this.length > 1) {
            this.heapify_up(this.length - 1);
        }
    }

    public peek(): number { return this.length > 0 ? this.arr[0] : NaN; }

    public delete(): number {
        // 2, 1 => 1, 0
        if (this.length === 0) return NaN;

        const v = this.arr[0];

        this.swap(0, this.length-- - 1);

        if (this.length <= 1) return v;

        this.heapify_down(0);

        return v;
    }
}
