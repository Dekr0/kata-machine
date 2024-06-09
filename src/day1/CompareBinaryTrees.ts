import { ok } from "node:assert/strict";

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (!a && !b) return true;

    const notBalance = (!a && b) || (a && !b);

    if (notBalance) return false;

    ok(a && b);

    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
