export default function post_order_search(head: BinaryNode<number>): number[] {
    const arr = [];

    if (head.left !== null) arr.push(...post_order_search(head.left));

    if (head.right !== null) arr.push(...post_order_search(head.right));

    arr.push(head.value);

    return arr;
}
