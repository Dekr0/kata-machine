function swap(arr: number[], src: number, dst: number): void {
    const tmp = arr[src];
    arr[src] = arr[dst];
    arr[dst] = tmp;
}

function pivot(arr: number[], low: number, high: number): number {
    const factorIdx = Math.floor((low + high) / 2);
    swap(arr, factorIdx, high);
    let pivotIndex = low;
    for (let i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, high, pivotIndex);
    return pivotIndex;
} 

function qsort(arr: number[], low: number, high: number) {
    if (low >= high) return;

    const p = pivot(arr, low, high);

    qsort(arr, low,  p - 1);
    qsort(arr, p + 1, high);
}

export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1);
}
