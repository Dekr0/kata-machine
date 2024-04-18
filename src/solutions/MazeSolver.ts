const diffMoves: Point[] = [ // Differential Move
    {x: 0, y: -1},  // Up
    {x: 0, y: 1},   // Down
    {x: -1, y: 0},  // Left
    {x: 1, y: 0}    // Right
];


function walk(maze: string[], wall: string, current: Point, end: Point, path: Point[], seen: boolean[][]): boolean {
    if (current.x < 0 || current.x >= maze[0].length || 
        current.y < 0 || current.y >= maze.length) {
        return false;
    }

    // Visit the wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }

    // Visit the place that already visited before
    if (seen[current.y][current.x]) {
        return false;
    }

    // Visit the end
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // Recursive case
    // pre
    seen[current.y][current.x] = true;
    path.push(current);

    // recursive
    for (const diffMove of diffMoves) {
        if (walk(
            maze,
            wall,
            { x: current.x + diffMove.x, y: current.y + diffMove.y } as Point,
            end,
            path,
            seen
        )) {  // Stop the recursive if the next several recursive call finish
            return true;
        }
    }

    // post => this point cannot lead to a solution, not part of the solution path, 
    // pop it out
    path.pop();

    return false;
}

// This is entrance to the recurisve function. It's not the recursive function
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] =[];
    const path: Point[] = [];
    
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, path, seen);

    return path;
}
