package solution_test

import (
	"slices"
	"testing"

	"dekwo.dev/kuromaku/solution/sort"
)


func TestQuickSort(t *testing.T) {
    test := []int{9, 3, 7, 4, 69, 420, 42}
    expe := []int{3, 4, 7, 9, 42, 69, 420}

    sort.Quicksort(test)

    if !slices.Equal(test, expe) {
        t.Fatalf("output: %v\nexpected: %v", test, expe)
    }
}

func TestMergeSort(t *testing.T) {
    test := []int{9, 3, 7, 4, 69, 420, 42}
    expe := []int{3, 4, 7, 9, 42, 69, 420}

    sort.RMergesort(test)

    if !slices.Equal(test, expe) {
        t.Fatalf("output: %v\nexpected: %v", test, expe)
    }
}

