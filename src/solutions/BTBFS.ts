import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<BinaryNode<number>>();

    q.enqueue(head);
    
    while (q.length !== 0) {
        const node = q.deque();
        if (node) {
            if (node.value === needle) return true;
            if (node.left) q.enqueue(node.left);
            if (node.right) q.enqueue(node.right);
        }
    }

    return false;
}
