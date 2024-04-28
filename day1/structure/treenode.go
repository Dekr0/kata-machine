package structure

import "cmp"

type TreeNode[T cmp.Ordered] struct {
    Value T
    Left  *TreeNode[T]
    Right *TreeNode[T]
}

// Naive implementation on convert an array to binary tree
func MakeTree[T cmp.Ordered](arr []T, parent *TreeNode[T], left int, right int) { 
    if left >= len(arr) { return }

    parent.Left = &TreeNode[T]{ arr[left], nil, nil }

    if right >= len(arr) { return }

    parent.Right = &TreeNode[T]{ arr[right], nil, nil }

    MakeTree(arr, parent.Left, left * 2 + 1, left * 2 + 2)
    MakeTree(arr, parent.Right, right * 2 + 1, right * 2 + 2)
}

func MakeTreeA() *TreeNode[int] {
    arr := []int{1}

    root := &TreeNode[int]{ arr[0], nil, nil }

    MakeTree(arr, root, 0 * 2 + 1, 0 * 2 + 2)

    return root
}

func MakeTreeB() *TreeNode[int] {
    root := &TreeNode[int]{}

    root.Value = 20

    root.Left = &TreeNode[int]{}
    root.Right = &TreeNode[int]{}

    root.Left.Value = 10
    root.Left.Left = &TreeNode[int]{5, nil, &TreeNode[int]{7, nil, nil}}
    root.Left.Right = &TreeNode[int]{15, nil, nil}

    root.Right.Value = 50
    root.Right.Left= &TreeNode[int]{
        30,
        &TreeNode[int]{29, nil, nil},
        &TreeNode[int]{45, nil, nil},
    }
    root.Right.Right = &TreeNode[int]{100, nil, nil}

    return root
}

func MakeTreeC() *TreeNode[int] {
    root := &TreeNode[int]{}

    root.Value = 20

    root.Left = &TreeNode[int]{}
    root.Right = &TreeNode[int]{}

    root.Left.Value = 10
    root.Left.Left = &TreeNode[int]{5, nil, &TreeNode[int]{7, nil, nil}}
    root.Left.Right = &TreeNode[int]{15, nil, nil}

    root.Right.Value = 50
    root.Right.Left= &TreeNode[int]{
        30,
        &TreeNode[int]{29, &TreeNode[int]{21, nil, nil}, nil},
        &TreeNode[int]{45, nil, &TreeNode[int]{49, nil, nil}},
    }
    root.Right.Right = nil

    return root
}

