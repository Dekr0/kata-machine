export default function bubble_sort(arr: number[]): void {
    let i = 0;
    let j = 0;
    let tmp = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j+1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
