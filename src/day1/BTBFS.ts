import Queue from "@code/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const unseens = new Queue<BinaryNode<number>>();
    unseens.enqueue(head);
    while (unseens.length > 0) {
        const top = unseens.deque();
        if (!top) throw Error("The length of Queue of unseen nodes is not zero but dequeue an undefined item");
        if (top.value === needle) return true;
        top.left  && unseens.enqueue(top.left);
        top.right && unseens.enqueue(top.right);
    }
    return false;
}
