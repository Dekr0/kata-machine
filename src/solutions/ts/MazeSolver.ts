const deltaMoves: Point[] = [
    { x: 0 , y: -1 },
    { x: 1 , y: 0  },
    { x: 0 , y: 1  },
    { x: -1, y: 0  },
];

export function _solve(
    maze: string[],
    seen: boolean[][],
    path: Point[],
    wall: string,
    curr: Point,
    dest: Point
): boolean {
    const notInYBound = curr.y < 0 || curr.y > maze.length;

    if (notInYBound) return false;

    const notInXBound = curr.x < 0 || curr.x > maze[curr.y].length;

    if (notInXBound) return false;

    if (seen[curr.y][curr.x]) return false;

    if (maze[curr.y][curr.x] === wall) return false;

    seen[curr.y][curr.x] = true;

    path.push(curr);

    if (curr.x === dest.x && curr.y === dest.y) return true;

    for (let i = 0; i < deltaMoves.length; i++) {
        if (_solve(
                maze,
                seen, 
                path,
                wall,
                { x: curr.x + deltaMoves[i].x, y: curr.y + deltaMoves[i].y },
                dest
            )) return true;
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    src: Point,
    dst: Point): Point[] {
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        const row: boolean[] = [];
        for (let j = 0; j < maze[i].length; j++) {
            row.push(false);
        }
        seen.push(row);
    }

    const path: Point[] = [];

    _solve(maze, seen, path, wall, src, dst);

    return path;
}
