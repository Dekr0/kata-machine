export default function in_order_search(head: BinaryNode<number>): number[] {
    const arr = [];

    if (head.left !== null) arr.push(...in_order_search(head.left));

    arr.push(head.value);

    if (head.right !== null) arr.push(...in_order_search(head.right));

    return arr;
}
