package search

import (
	"cmp"

	"dekwo.dev/kata_machine/solution/structure"
)

// [ 1 2 3 4 5 6 7 ] => [ 1 2 4 5 3 6 7 ]
func PreOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = append(hist, node.Value)
    hist = PreOrder(node.Left, hist)
    hist = PreOrder(node.Right, hist)

    return hist
}

// [ 1 2 3 4 5 6 7 ] => [ 4 2 5 1 6 3 7 ] (flat out the tree structure, middle is the root)
func InOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = InOrder(node.Left, hist)
    hist = append(hist, node.Value)
    hist = InOrder(node.Right, hist)

    return hist
}

// [ 1 2 3 4 5 6 7 ] => [ 4 5 2 6 7 3 1 ]
func PostOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = PostOrder(node.Left, hist)
    hist = PostOrder(node.Right, hist)
    hist = append(hist, node.Value)

    return hist
}

func RDFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
    if node == nil { return false }

    if node.Value == needle { return true }

    if RDFS(node.Left, needle) || RDFS(node.Right, needle) { return true }

    return false
}

func DFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
    if node == nil { return false }

    stack := []*structure.TreeNode[T]{ node }

    for len(stack) > 0 {
        pop := stack[len(stack) - 1]

        if pop.Value == needle { return true }

        stack = stack[:len(stack) - 1]

        if pop.Left != nil { stack = append(stack, pop.Left) }

        if pop.Right != nil { stack = append(stack, pop.Right) }
    }

    return false
}

func BFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
    queue := []*structure.TreeNode[T]{ node }

    for len(queue) > 0 {
        dequeued := queue[0]
        
        if dequeued.Value == needle { return true }
        
        if dequeued.Left != nil { queue = append(queue, dequeued.Left) }

        if dequeued.Right != nil { queue = append(queue, dequeued.Right) }

        queue = queue[1:]
    }

    return false
}
