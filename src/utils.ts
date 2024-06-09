export function swap<T>(arr: T[], src: number, dst: number) {
    if (src < 0 || dst >= arr.length) throw Error("Invalid source or destination");
    const tmp = arr[src];
    arr[src] = arr[dst];
    arr[dst] = tmp;
}
