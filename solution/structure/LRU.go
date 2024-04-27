package structure

import "errors"

type node[V any] struct {
    val V
    next *node[V]
    prev *node[V]
}

type LRU[K comparable, V any] struct {
    forward_map map[K]*node[V]
    reverse_map map[*node[V]]K
    head *node[V]
    tail *node[V]
    Size int
    Capc int
}

func NewLRU[K comparable, V any](capc int) (*LRU[K, V], error) {
    if capc == 0 { return nil, errors.New("Invalid Capacity") }

    var e error

    if capc == 1 { e = errors.New("Warning: LRU's capacity is set to 1") }

    return &LRU[K, V]{
        make(map[K]*node[V], capc),
        make(map[*node[V]]K, capc),
        nil,
        nil,
        0,
        capc,
    }, e
}

func (l *LRU[K, V]) Get(k K) (V, bool) {
    var v V; if l.Size == 0 { return v, false }

    if node, in := l.forward_map[k]; in {
        if node == l.head { return node.val, true }

        if node == l.tail {
            l.tail = l.tail.prev; l.tail.next = nil
        } else {
            node.prev.next, node.next.prev = node.next, node.prev
        }

        node.next, l.head.prev, l.head = l.head, node, node;

        return node.val, true
    }

    return v, false
}

func (l *LRU[K, V]) Update(k K, v V) {
    if l.Size == 0 { l.prepend(k, v); return }

    if node, in := l.forward_map[k]; in {
        node.val = v

        if node == l.head { return }

        if node == l.tail {
            l.tail = l.tail.prev; l.tail = nil
        } else {
            node.prev.next, node.next.prev = node.next, node.prev
        }

        node.next, l.head.prev, l.head = l.head, node, node;

        return
    }

    l.prepend(k, v)
}

func (l *LRU[K, V]) prepend(k K, v V) {
    node := &node[V]{v, nil, nil}; 

    l.forward_map[k] = node; l.reverse_map[node] = k

    if l.Size == 0 { l.head, l.tail = node, node; l.Size++; return }

    if l.Size == l.Capc {
        tail_key := l.reverse_map[l.tail]; delete(l.forward_map, tail_key); 

        delete(l.reverse_map, l.tail)

        if l.Capc == 1 {
            l.tail.next, l.tail.prev = nil, nil; l.head, l.tail = nil, nil
        } else {
            l.tail = l.tail.prev; l.tail.next = nil;
        }
    } else {
        l.Size++
    }

    if l.Capc == 1 && l.Capc == l.Size { 
        l.head, l.tail = node, node
    } else {
        node.next, l.head.prev = l.head, node; l.head = node
    }
}
