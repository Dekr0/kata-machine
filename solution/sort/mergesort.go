package sort

import (
	"cmp"
	"fmt"
)

func merge[T cmp.Ordered](arr []T, low int, mid int, high int) {
    left_len  := mid - low  + 1
    right_len := high - mid

    left := make([]T,  left_len,  left_len)
    right := make([]T, right_len, right_len)

    for i := 0; i < left_len; i++ {
        left[i] = arr[low + i]
    }

    for i := 0; i < right_len; i++ {
        right[i] = arr[mid + i + 1]
    }
    fmt.Println(low, mid, high)

    i, j, k := 0, 0, low
    for ; i < left_len && j < right_len; k++ {
        if left[i] > right[j] {
            arr[k] = right[j]
            j++
        } else {
            arr[k] = left[i]
            i++
        }
    }
    for ; i < left_len; i++ {
        arr[k] = left[i]
        k++
    }
    for ; j < right_len; j++ {
        arr[k] = right[j]
        k++
    }
}

func mergesort[T cmp.Ordered](arr []T, low int, high int) {
    if low >= high { return }

    mid := (low + high) / 2
    
    mergesort(arr, low,      mid)
    mergesort(arr, mid + 1, high)
    
    merge(arr, low, mid, high)
}

func RMergesort[T cmp.Ordered](arr []T) {
    mergesort(arr, 0, len(arr) - 1)
}
