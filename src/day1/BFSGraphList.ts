import { ok } from "node:assert/strict";
import { backtrack } from "@code/BFSGraphMatrix";
import Queue from "@code/Queue";

export default function bfs(graph: WeightedAdjacencyList, src: number, dst: number): number[] | null {
    const queue = new Queue<number>();
    const visited = new Map<number, number>();
    queue.enqueue(src);
    visited.set(src, NaN);
    while (queue.length > 0) {
        const prev = queue.deque();
        ok(prev !== undefined);
        for (let i = 0; i < graph[prev].length; i++) {
            const edge = graph[prev][i];
            if (edge.weight <= 0) continue;
            if (edge.to === dst) {
                visited.set(edge.to, prev);
                return backtrack(visited, src, dst);
            }
            if (visited.has(edge.to)) continue;
            visited.set(edge.to, prev);
            queue.enqueue(edge.to);
        }
    }
    return null;
}
