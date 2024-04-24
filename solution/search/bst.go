package search

import (
	"dekwo.dev/kata_machine/solution/structure"
)

// [ 1 2 3 4 5 6 7 ] => [ 1 2 4 5 3 6 7 ]
func PreOrder[T comparable](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = append(hist, node.Value)
    hist = PreOrder(node.Left, hist)
    hist = PreOrder(node.Right, hist)

    return hist
}

// [ 1 2 3 4 5 6 7 ] => [ 4 2 5 1 6 3 7 ] (flat out the tree structure, middle is the root)
func InOrder[T comparable](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = InOrder(node.Left, hist)
    hist = append(hist, node.Value)
    hist = InOrder(node.Right, hist)

    return hist
}

// [ 1 2 3 4 5 6 7 ] => [ 4 5 2 6 7 3 1 ]
func PostOrder[T comparable](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = PostOrder(node.Left, hist)
    hist = PostOrder(node.Right, hist)
    hist = append(hist, node.Value)

    return hist
}

func RDFS[T comparable](node *structure.TreeNode[T], needle T) bool {
    if node == nil { return false }

    if node.Value == needle { return true }

    if RDFS(node.Left, needle) || RDFS(node.Right, needle) { return true }

    return false
}

func BFS[T comparable](node *structure.TreeNode[T], needle T) bool {
    

    return false
}
