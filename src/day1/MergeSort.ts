function merge(arr: number[], workingBuffer: number[], low: number, mid: number, high: number) {
    let i = low, j = mid + 1, k = low;
    for ( ; i <= mid && j <= high; k++) {
        if (workingBuffer[i] < workingBuffer[j]) {
            arr[k] = workingBuffer[i];
            i++;
        } else {
            arr[k] = workingBuffer[j];
            j++;
        }
    }
    for ( ; i <= mid; i++, k++) arr[k] = workingBuffer[i]; 

    for ( ; j <= high; j++, k++) arr[k] = workingBuffer[j];

    for (k = low; k <= high; k++) workingBuffer[k] = arr[k];
}

function mergeSort(arr: number[], workingBuffer: number[], low: number, high: number) {
    if (low >= high) return;

    const mid = Math.floor((low + high) / 2);

    mergeSort(arr, workingBuffer, low, mid);
    mergeSort(arr, workingBuffer, mid + 1, high);

    merge(arr, workingBuffer, low, mid, high);
}

export default function merge_sort(arr: number[]): void {
    const workingBuffer = [];
    for (let i = 0; i < arr.length; i++) workingBuffer[i] = arr[i];
    mergeSort(arr, workingBuffer, 0, arr.length - 1);
}
