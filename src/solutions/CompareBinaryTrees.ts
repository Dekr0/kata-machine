export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (!a && !b) return true;

    if (!a || !b) return false

    let safeNodeA = a as BinaryNode<number>;
    let safeNodeB = b as BinaryNode<number>;

    if (safeNodeA.value !== safeNodeB.value) return false;

    return compare(safeNodeA.left, safeNodeB.left) && 
           compare(safeNodeA.right, safeNodeB.right);
}
