package sort

import (
	"cmp"
)

func pivot[T cmp.Ordered](arr []T, low int, high int) int {
    mid := (low + high) / 2
    arr[mid], arr[high] = arr[high], arr[mid]

    pivot := low
    for i := low; i < high; i++ {
        if arr[i] <= arr[high] {
            arr[pivot], arr[i] = arr[i], arr[pivot]
            pivot += 1
        }
    }

    arr[pivot], arr[high] = arr[high], arr[pivot]

    return pivot 
}

func quicksort[T cmp.Ordered](arr []T, low int, high int) {
    if low >= high { return }

    pivot := pivot(arr, low, high)

    quicksort(arr, low,  pivot - 1)
    quicksort(arr, pivot + 1, high)
}

func Quicksort[T cmp.Ordered](arr []T) {
    if len(arr) <= 1 { return }

    quicksort(arr, 0, len(arr) - 1)
}
