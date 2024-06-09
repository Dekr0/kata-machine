export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    for ( ; i < breaks.length && !breaks[i]; i += jmp);
    for (let j = i - jmp; j < i && j < breaks.length; j++) {
        if (breaks[j]) return j;
    }
    return -1;
}
