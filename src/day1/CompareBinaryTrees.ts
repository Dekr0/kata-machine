export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) return true;

    if (a !== null && b === null) return false;

    if (a === null && b !== null) return false;

    let nodeA = a as BinaryNode<number>, nodeB = b as BinaryNode<number>;

    if (nodeA.value !== nodeB.value) return false;

    return compare(nodeA.left, nodeB.left) && compare(nodeA.right, nodeB.right);
}
