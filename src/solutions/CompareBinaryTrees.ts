export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // To compare a and b, both trees need to walk in the same path with DFS
    
    // This is only base case
    // If both finish DFS without triggering the above condition => they are the same
    if (a === null && b === null) return true;

    // These two are not the base case because none of them exhaust DFS yet
    // so they must be put after (a === null && b === null)
    //
    // If one tree finishes DFS and another one does not => a and b are different by shape
    if (a === null || b === null) return false;  

    // Assume two tree have the same shape => they reach at the same position => compare value
    if (a.value !== b.value) return false;
    

    // Compare the left subtree of both a and b, then compare the right subtree of both a and b
    return compare(a.left, b.left) && compare(a.right, b.right);
}
