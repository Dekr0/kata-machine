// Assume compareFn(a, b) is performing a <= b
function partition<T>(low: number, high: number, arr: T[], compareFn: (a: T, b: T) => boolean): number {
    const pivotIndex = Math.floor((low + high) / 2);
    const pivot = arr[pivotIndex];

    // Pick the middle as our pivot, swap pivot and the last element of the array
    const tmp = arr[high];
    arr[high] = pivot;
    arr[pivotIndex] = tmp;
    
    // The index for next element that is smaller than the pivot (start at low)
    let idx = low;
    for (let i = low; i < high; i++) {
        if (compareFn(arr[i], pivot)) {
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
            idx++;
        }
    }

    arr[high] = arr[idx];
    arr[idx] = pivot;
    
    return idx;
}

function qsort<T>(low: number, high: number, arr: T[], compareFn: (a: T, b: T) => boolean): void {
    if (low >= high) {
        return;
    }

    const pivotIndex = partition(low, high, arr, compareFn);
    
    qsort(low, pivotIndex - 1, arr, compareFn);
    qsort(pivotIndex + 1, high, arr, compareFn);
    
    return;
}

export default function quick_sort_generic<T>(arr: T[], compareFn: (a: T, b: T) => boolean): void {
    qsort(0, arr.length - 1, arr, compareFn);
}

