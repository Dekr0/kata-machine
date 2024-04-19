package sort

import (
	"cmp"
)

func merge[T cmp.Ordered](arr []T, buffer []T, low int, mid int, high int) {
    i, j, k := low, mid + 1, low
    for ; i <= mid && j <= high; k++ {
        if buffer[i] < buffer[j] {
            arr[k] = buffer[i] 
            i++
        } else {
            arr[k] = buffer[j]
            j++
        }
    }
    for ; i <= mid; i, k = i + 1, k + 1 {
       arr[k] = buffer[i] 
    }
    for ; j <= high; j, k = j + 1, k + 1 {
       arr[k] = buffer[j] 
    } 
    for k = low; k <= high; k++ {
        buffer[k] = arr[k];
    }
}

func mergesort[T cmp.Ordered](arr []T, buffer []T, low int, high int) {
    if low >= high { return }

    mid := (low + high) / 2

    mergesort(arr, buffer, low,      mid)
    mergesort(arr, buffer, mid + 1, high)

    merge(arr, buffer, low, mid, high)
}

func RMergesort[T cmp.Ordered](arr []T) {
    buffer := make([]T, len(arr), len(arr))

    if copy(buffer, arr) != len(arr) {
        panic(nil);
    }

    mergesort(arr, buffer, 0, len(arr) - 1);
}
