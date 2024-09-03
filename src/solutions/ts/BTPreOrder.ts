export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr = [head.value];

    if (head.left === null && head.right === null) return arr;

    if (head.left !== null) arr.push(...pre_order_search(head.left));

    if (head.right !== null) arr.push(...pre_order_search(head.right));

    return arr;
}
