export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];

    while (queue.length > 0) {
        const unsafe = queue.shift();
        if (!unsafe) throw Error("Exception occurs");

        const safe = unsafe as BinaryNode<number>;

        if (safe.value === needle) return true;

        safe.left !== null && queue.push(safe.left);

        safe.right !== null && queue.push(safe.right);
    }

    return false;
}
