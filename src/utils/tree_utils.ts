import Queue from "@code/Queue";

function array2treeI<T>(arr: T[]): BinaryNode<T> | null {
    if (arr.length === 0) return null;
    let i = 0;
    const root: BinaryNode<T> = { value: arr[i], left: null, right: null };
    const queue = new Queue<BinaryNode<T>>();
    queue.enqueue(root);
    while (queue.length > 0) {
        const top = queue.deque();
        if (!top) throw Error("Queue length is not zero but dequeue an undefined item");
        const leftIdx  = i * 2 + 1;
        const rightIdx = i * 2 + 2;
        if (leftIdx < arr.length) {
            const leftNode = { value: arr[leftIdx], left: null, right: null }
            top.left = leftNode;
            queue.enqueue(leftNode);
        }
        if (rightIdx < arr.length) {
            const rightNode = { value: arr[rightIdx], left: null, right: null }
            top.left = rightNode;
            queue.enqueue(rightNode);
        }
        i++;
    }
    return root;
}

function array2treeR<T>(arr: T[], i: number): BinaryNode<T> | null {
    if (i >= arr.length) return null;

    const root = { 
        value: arr[i],
        left : array2treeR(arr, i * 2 + 1),
        right : array2treeR(arr, i * 2 + 2)
    };

    return root;
}
