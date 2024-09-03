export type TreeNode<T> = {
    value: T;
    left: TreeNode<T> | undefined,
    right: TreeNode<T> | undefined
};


export function walkTree<T>(curr: TreeNode<T> | undefined, r: string): void {
    if (!curr) return;

    r += `${curr.value}`;

    walkTree(curr.left, r);
    walkTree(curr.right, r);
}

