export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.left === null && head.right === null) return head.value === needle;

    return (head.left !== null && dfs(head.left, needle)) || 
           (head.right !== null && dfs(head.right, needle));
}
