export default function in_order_search(head: BinaryNode<number>): number[] {
    if (!head.left && !head.right) return [head.value];
    
    const arr = [];

    head.left  && arr.push(...in_order_search(head.left));

    arr.push(head.value);

    head.right && arr.push(...in_order_search(head.right));

    return arr;
}
