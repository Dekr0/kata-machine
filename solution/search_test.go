package solution_test

import (
	"testing"

	"dekwo.dev/kata_machine/solution/search"
	"dekwo.dev/kata_machine/solution/structure"
)

func TestBST(t *testing.T) {
    root := structure.MakeTreeB() 

    pre  := make([]int, 0, 10)
    in   := make([]int, 0, 10)
    post := make([]int, 0, 10)

    pre  = search.PreOrder(root, pre)
    in   = search.InOrder(root, in)
    post = search.PostOrder(root, post)

    preExpected := []int {
        20,
        10,
        5,
        7,
        15,
        50,
        30,
        29,
        45,
        100,
    }

    inExpected := []int {
        5,
        7,
        10,
        15,
        20,
        29,
        30,
        45,
        50,
        100,
    }

    postExpected := []int {
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    }

    for i := 0; i < len(pre); i++ {
        if pre[i] != preExpected[i] { 
            t.Fatalf("PreOrder: expected %d at i but got %d. Output: %v. Expected: %v.", preExpected[i], pre[i], pre, preExpected)
        }
    }

    for i := 0; i < len(in); i++ {
        if in[i] != inExpected[i] { 
            t.Fatalf("InOrder: expected %d at i but got %d. Output: %v. Expected: %v.", inExpected[i], in[i], in, inExpected)
        }
    }

    for i := 0; i < len(post); i++ {
        if post[i] != postExpected[i] { 
            t.Fatalf("PostOrder: expected %d at i but got %d. Output: %v. Expected: %v.", postExpected[i], post[i], post, postExpected)
        }
    }
}

func TestDFSBST(t *testing.T) {
    root := structure.MakeTreeB() 

    if !search.RDFS(root, 45) { t.Fatalf("Search for 45. Output: %v. Expected: %v", false, true )}
    if !search.RDFS(root, 7 ) { t.Fatalf("Search for 7.  Output: %v. Expected: %v", false, true )}
    if  search.RDFS(root, 69) { t.Fatalf("Search for 69. Output: %v. Expected: %v", true, false )}
}
