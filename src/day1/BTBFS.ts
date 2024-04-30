export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];

    while (queue.length > 0) {
        const top = queue.shift() as BinaryNode<number>;

        if (top.value === needle) return true;

        top.left !== null && queue.push(top.left);

        top.right !== null && queue.push(top.right);
    }

    return false;
}
