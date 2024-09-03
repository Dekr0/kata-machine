export default function dfs(graph: WeightedAdjacencyList, start: number, end: number): number[] | null {
    const nodes = [start];
    let visited = new Map<number, number>(); 
    while (nodes.length > 0) {
        const node = nodes.pop() as number;
        for (let i = 0; i < graph[node].length; i++) {
            if (graph[node][i].weight === 0) continue;
            if (graph[node][i].to === end) {
                if (visited.has(graph[node][i].to)) {
                    throw Error("Exception occurs");
                }
                visited.set(graph[node][i].to, node);
                return backtrack(visited, start, end);
            }
            if (visited.has(graph[node][i].to)) continue;
            visited.set(graph[node][i].to, node);
            nodes.push(graph[node][i].to);
        }
    }
    return null;
}

function backtrack(visited: Map<number, number>, start: number, end: number): number[] {
    const path = [end]; 
    let node = end;
    while (node !== start) {
        if (!visited.has(node)) throw Error("Exception occurs");
        const prev_node = visited.get(node) as number;
        path.unshift(prev_node);
        node = prev_node;
    }
    return path;
}
