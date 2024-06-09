import { backtrack } from "@code/BFSGraphMatrix";
import { ok } from "node:assert/strict";

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const stack = [source];
    const visit = new Map<number, number>();
    visit.set(source, NaN);
    while (stack.length > 0) {
        const prev = stack.pop();
        ok(prev !== undefined);
        for (let i = 0; i < graph[prev].length; i++) {
            const edge = graph[prev][i];
            if (edge.weight === 0) continue;
            if (edge.to === needle) {
                visit.set(edge.to, prev);
                return backtrack(visit, source, needle);
            }
            if (visit.has(edge.to)) continue;
            visit.set(edge.to, prev);
            stack.push(edge.to);
        }
    }
    return null;
}
