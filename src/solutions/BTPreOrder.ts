function walk<T>(curr: BinaryNode<T> | null, path: T[]): T[] {
    // This simplfy some base cases by simply walking into a null node
    // => a node is leaf node,
    // => a node only have left child => walk left only
    // => a node only have right child => walk right only
    // The agent will simply keep walking
    // 
    if (!curr) {   
        return path;
    }

    path.push(curr.value);
    walk(curr.left, path);
    walk(curr.right, path);

    return path;
}

export default function pre_order_search<T>(head: BinaryNode<T>): T[] {
    return walk(head, []);
}
