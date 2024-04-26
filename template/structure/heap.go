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
}

func (h *Heap[T]) Append(item T) {
}

func (h *Heap[T]) Pop() (T, error) {
}

func (h *Heap[T]) ToString() {
    fmt.Printf("%v\n", h.heap)
}
