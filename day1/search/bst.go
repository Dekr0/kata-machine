package search

import (
	"cmp"

	"dekwo.dev/kata_machine/day1/structure"
)

func PreOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = append(hist, node.Value)

    hist = PreOrder(node.Left, hist); hist = PreOrder(node.Right, hist)

    return hist
}

func InOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = InOrder(node.Left, hist); 

    hist = append(hist, node.Value)

    hist = InOrder(node.Right, hist)

    return hist
}

func PostOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
    if node == nil { return hist }

    hist = PostOrder(node.Left, hist); hist = PostOrder(node.Right, hist)

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

        stack = stack[:len(stack) - 1]

        if pop.Value == needle { return true }

        if pop.Left != nil { stack = append(stack, pop.Left) }

        if pop.Right != nil { stack = append(stack, pop.Right) }
    }

    return false
}

func BFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
    queue := []*structure.TreeNode[T]{ node }

    for len(queue) > 0 {
        first := queue[0]

        if first.Value == needle { return true }

        queue = queue[1:]

        if first.Left != nil { queue = append(queue, first.Left) }
        
        if first.Right != nil { queue = append(queue, first.Right) }
    }

    return false
}
