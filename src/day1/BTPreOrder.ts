export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr = [head.value];

    if (!head.left && !head.right) return arr; 

    head.left  && arr.push(...pre_order_search(head.left));

    head.right && arr.push(...pre_order_search(head.right));

    return arr;
}
