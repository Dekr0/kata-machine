export default function post_order_search(head: BinaryNode<number>): number[] {
    if (!head.left && !head.right) return [head.value];

    const arr = [];

    head.left  && arr.push(...post_order_search(head.left));

    head.right && arr.push(...post_order_search(head.right));

    arr.push(head.value);

    return arr;
}
