export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) return true;

    return (head.left !== null && dfs(head.left, needle)) 
        || (head.right !== null && dfs(head.right, needle)); 
}
