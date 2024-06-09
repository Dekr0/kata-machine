import { ok } from "node:assert/strict";
import Queue from "@code/Queue";

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const queue = new Queue<number>();
    const visited = new Map<number, number>();
    queue.enqueue(source);
    visited.set(source, NaN);
    while (queue.length > 0) {
        const prev = queue.deque();
        ok(prev !== undefined);
        for (let i = 0; i < graph[prev].length; i++) {
            if (graph[prev][i] === 0) continue;
            if (i === needle) {
                ok(!visited.has(i));
                visited.set(i, prev);
                return backtrack(visited, source, needle);
            }
            if (visited.has(i)) continue;
            visited.set(i, prev);
            queue.enqueue(i);
        }
    }
    return null;
}

export function backtrack(visited: Map<number,number>, source: number, needle: number) {
    const path = [needle];
    let curr = needle;
    while (curr !== source) {
        const prev = visited.get(curr);
        ok(prev !== undefined);
        path.unshift(prev);
        curr = prev;
    }
    return path;
}
