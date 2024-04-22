package structure

import "errors"

type RingBuffer struct {
    buffer []*Node
    head   int
    tail   int
    size   int
    full   bool
}

func NewRingBuffer(size int) (*RingBuffer, error) {}

func (r *RingBuffer) _next_read() {}

func (r *RingBuffer) _next_write() {}

func (r *RingBuffer) IsEmpty() bool {}

func (r *RingBuffer) Push(i *Node) *Node {}

func (r *RingBuffer) Pop() *Node {}
