export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0, high = haystack.length; // boundary [low, high)
    do {
        const mid = Math.floor((low + high) / 2);
        if (needle === haystack[mid]) {
            return true;
        } else if (needle < haystack[mid]) {
            high = mid;
        } else {
            low = mid + 1; // excluding mid because it's compared with needle.
        }
    } while (low < high);
    return false;
}
