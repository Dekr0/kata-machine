package structure

import "errors"

type RingBuffer struct {
    buffer []*Node
    head   int
    tail   int
    size   int
    full   bool
}

func NewRingBuffer(size int) (*RingBuffer, error) {
    if size < 0 {
        return nil, errors.New("Invalid RingBuffer size")
    }

    return &RingBuffer {make([]*Node, size, size), 0, 0, size, false}, nil
}

func (r *RingBuffer) _next_read() {
   if r.tail + 1 >= r.size {
       r.tail = 0
   } else {
       r.tail = r.tail + 1
   }
}

func (r *RingBuffer) _next_write() {
   if r.head + 1 >= r.size {
       r.head = 0
   } else {
       r.head = r.head + 1
   }
}

func (r *RingBuffer) IsEmpty() bool {
    return r.head == r.tail && !r.full
}

func (r *RingBuffer) Push(i *Node) *Node {
    old := r.buffer[r.head]

    if r.full {
        r._next_read()
    }

    r.buffer[r.head] = i

    r._next_write()

    if r.head == r.tail {
        r.full = true
    }

    return old
}

func (r *RingBuffer) Pop() *Node {
    if r.IsEmpty() { return nil }

    r.full = false

    top := r.buffer[r.tail]

    r._next_read()

    return top
}
