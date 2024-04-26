package search

import (
	"cmp"

	"dekwo.dev/kata_machine/{}/structure"
)

func PreOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
}

func InOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
}

func PostOrder[T cmp.Ordered](node *structure.TreeNode[T], hist []T) []T {
}

func RDFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
}

func DFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
}

func BFS[T cmp.Ordered](node *structure.TreeNode[T], needle T) bool {
}
