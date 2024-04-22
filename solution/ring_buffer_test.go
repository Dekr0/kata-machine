package solution_test

import (
	"testing"
	"time"

	"dekwo.dev/kata_machine/solution/structure"
)

func TestRingBuffer(t *testing.T) {
    buffer, _ := structure.NewRingBuffer(5)

    for i := 0; i < 5; i++ {
        buffer.Push(&structure.Node{ Value: i + 1, Timestamp: time.Now()})
    }
}

