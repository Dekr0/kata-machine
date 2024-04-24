package solution_test

import (
	"testing"

	"dekwo.dev/kata_machine/solution/structure"
)

func TestHeap(t *testing.T) {
    heap := structure.NewHeap[int]()

    heap.Append(5)
    heap.Append(3)
    heap.Append(69)
    heap.Append(420)
    heap.Append(4)
    heap.Append(1)
    heap.Append(7)
    heap.Append(8)

    heap.ToString()
    r, _ := heap.Pop()
    if r != 1 { t.Fatalf("Pop() = 1: Got %d", r) }
    heap.ToString()
    r, _ = heap.Pop()
    if r != 3 { t.Fatalf("Pop() = 3: Got %d", r) }
    heap.ToString()
    r, _ = heap.Pop()
    heap.ToString()
    if r != 4 { t.Fatalf("Pop() = 4: Got %d", r) }
    r, _ = heap.Pop()
    heap.ToString()
    if r != 5 { t.Fatalf("Pop() = 5: Got %d", r) }
    r, _ = heap.Pop()
    heap.ToString()
    if r != 7 { t.Fatalf("Pop() = 7: Got %d", r) }
    r, _ = heap.Pop()
    heap.ToString()
    if r != 8 { t.Fatalf("Pop() = 8: Got %d", r) }
    r, _ = heap.Pop()
    heap.ToString()
    if r != 69 { t.Fatalf("Pop() = 69: Got %d", r) }
    r, _ = heap.Pop()
    heap.ToString()
    if r != 420 { t.Fatalf("Pop() = 420: Got %d", r) }
}

