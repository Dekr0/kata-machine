export default function bs_list(haystack: number[], needle: number): boolean {
    // boundary [low, high)
    // Caution, excluding mid because it's compared with needle
    let low = 0;
    let high = haystack.length;
    let m, v;
    do {
        m = Math.floor(low + (high - low) / 2);
        v = haystack[m];
        if (needle < v) {
            high = m; // High is exclusive
        } else if (needle > v) {
            low = m + 1;
        } else {
            return true;
        }
    } while (low < high)

    return false;
}
