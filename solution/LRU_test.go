package solution_test

import (
    "testing"

	"dekwo.dev/kata_machine/solution/structure"
)

func TestLRU(t *testing.T) {
    lru, _ := structure.NewLRU[string, int](3)

    _, in := lru.Get("foo")
    if in { t.Fatal("lru.Get(\"foo\") expected false") }
    
    lru.Update("foo", 69)
    v, in := lru.Get("foo")
    if !in { t.Fatal("lru.Get(\"foo\") expected true") }
    if v != 69 { t.Fatal("lru.Get(\"foo\") expected 69") }

    lru.Update("bar", 420)
    v, in = lru.Get("bar")
    if !in { t.Fatal("lru.Get(\"bar\") expected true") }
    if v != 420 { t.Fatal("lru.Get(\"bar\") expected 420") }

    lru.Update("baz", 1337)
    v, in = lru.Get("baz")
    if !in { t.Fatal("lru.Get(\"baz\") expected true") }
    if v != 1337 { t.Fatal("lru.Get(\"baz\") expected 1337") }

    lru.Update("ball", 69420)
    v, in = lru.Get("ball")
    if !in { t.Fatal("lru.Get(\"ball\") expected true") }
    if v != 69420 { t.Fatal("lru.Get(\"baz\") expected 69420") }

    _, in = lru.Get("foo")
    if in { t.Fatal("lru.Get(\"foo\") expected false") }

    v, in = lru.Get("bar")
    if !in { t.Fatal("lru.Get(\"bar\") expected true") }
    if v != 420 { t.Fatal("lru.Get(\"bar\") expected 420") }

    lru.Update("foo", 69)

    v, in = lru.Get("bar")
    if !in { t.Fatal("lru.Get(\"bar\") expected true") }
    if v != 420 { t.Fatal("lru.Get(\"bar\") expected 420") }

    v, in = lru.Get("foo")
    if !in { t.Fatal("lru.Get(\"foo\") expected true") }
    if v != 69 { t.Fatal("lru.Get(\"foo\") expected 69") }

    _, in = lru.Get("baz")
    if in { t.Fatal("lru.Get(\"baz\") expected false") }

    lru, e := structure.NewLRU[string, int](1)
    t.Log(e.Error())

    _, in = lru.Get("foo")
    if in { t.Fatal("lru.Get(\"foo\") expected false") }
    
    lru.Update("foo", 69)
    v, in = lru.Get("foo")
    if !in { t.Fatal("lru.Get(\"foo\") expected true") }
    if v != 69 { t.Fatal("lru.Get(\"foo\") expected 69") }

    lru.Update("bar", 420)
    v, in = lru.Get("bar")
    if !in { t.Fatal("lru.Get(\"bar\") expected true") }
    if v != 420 { t.Fatal("lru.Get(\"bar\") expected 420") }

    _, in = lru.Get("foo")
    if in { t.Fatal("lru.Get(\"foo\") expected false") }
}
