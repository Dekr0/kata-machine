import "cmp"

type TreeNode[T cmp.Compareable] struct {
    Value T
    Left  *TreeNode
    Right *TreeNode
}
