export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));
    
    let j = 0;
    for (; j < breaks.length; j += jmp) {
        if (breaks[j]) break;
    }

    let i = j - jmp;

    // If the first crystal ball break at height 0 although it make no sense
    if (i < 0) {  
        return 0;
    }

    for (; i < j && i < breaks.length; i++) {
        if (breaks[i])
            return i;
    }

    return -1;
}
