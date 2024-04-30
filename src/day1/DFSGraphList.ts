import { log } from "console";
export default function dfs(graph: WeightedAdjacencyList, start: number, end: number): number[] | null {
    const unseens = [start];
    let visited = new Map<number, number>(); 
    while (unseens.length > 0) {
        const node = unseens.pop() as number;
        for (let i = 0; i < graph[node].length; i++) {
            log(visited);
            if (graph[node][i].weight === 0) continue;
            if (graph[node][i].to === end) {
                if (visited.has(graph[node][i].to)) {
                    throw Error("Destination node should not be visited.");
                }
                visited.set(graph[node][i].to, node);
                return backtrack(visited, start, end);
            }
            if (visited.has(graph[node][i].to)) continue;
            visited.set(graph[node][i].to, node);
            unseens.push(graph[node][i].to);
        }
    }
    return null;
}

function backtrack(visited: Map<number, number>, start: number, end: number): number[] {
    const path = [end]; 
    let node = end;
    while (node !== start) {
        if (!visited.has(node)) throw Error("Failed to backtrack the next previous node to recovery the path");
        const prev_node = visited.get(node) as number;
        path.unshift(prev_node);
        node = prev_node;
    }
    return path;
}
