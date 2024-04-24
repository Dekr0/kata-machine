package structure

import (
	"cmp"
	"errors"
	"fmt"
)

type Heap[T cmp.Ordered] struct {
    heap []T
}

func NewHeap[T cmp.Ordered]() *Heap[T] {
    return &Heap[T]{ []T{} }
}

func (h *Heap[T]) Peek() (T, error) {
    var top T

    if len(h.heap) > 0 {
        return h.heap[0], nil
    }

    return top, errors.New("Peeking an empty heap")
}

func (h *Heap[T]) Append(item T) {
    h.heap = append(h.heap, item)

    h.heap_up(len(h.heap) - 1)
}

func (h *Heap[T]) Pop() (T, error) {
    var top T

    if len(h.heap) <= 0 { return top, errors.New("Popping an empty Heap") }

    top = h.heap[0]

    h.heap[0], h.heap[len(h.heap) - 1]  = h.heap[len(h.heap) - 1], h.heap[0]

    h.heap = h.heap[:len(h.heap) - 1]

    h.heap_down(0)

    return top, nil
}

func (h *Heap[T]) heap_up(current int) {
    for current > 0 {
        parent := parent(current) 

        if cmp.Compare(h.heap[current], h.heap[parent]) > -1 { return }

        h.heap[current], h.heap[parent] = h.heap[parent], h.heap[current]

        current = parent
    }
}

func (h *Heap[T]) ToString() {
    fmt.Printf("%v\n", h.heap)
}

func parent(idx int) int {
    return idx / 2
}

func left(idx int) int {
    return idx * 2 + 1
}

func right(idx int) int {
    return idx * 2 + 2
}

func (h *Heap[T]) heap_down(current int) {
    for {
        left, right := left(current), right(current) 

        if left >= len(h.heap) { return }

        next := left

        if right < len(h.heap) && cmp.Compare(h.heap[left], h.heap[right]) == 1 {
            next = right
        }

        if cmp.Compare(h.heap[current], h.heap[next]) == -1 { return }

        h.heap[current], h.heap[next] = h.heap[next], h.heap[current]

        current = next
    }
}

