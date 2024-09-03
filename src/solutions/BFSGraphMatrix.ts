export default function bfs(graph: WeightedAdjacencyMatrix, src: number, dest: number): number[] | null {
    let nodes = [src];
    let visited = new Map<number, number>();
    while (nodes.length > 0) {
        const root = nodes.shift() as number;
        if (root > graph.length) throw Error("Invalid node");
        for (let i = 0; i < graph[root].length; i++) {
            if (graph[root][i] === 0) continue;
            
            if (i === dest) {
                if (visited.has(i)) throw Error("Destination should not be seen");
                visited.set(i, root);
                return backtrack(visited, src, dest);
            }

            if (visited.has(i)) continue;

            visited.set(i, root);

            nodes.push(i);
        }
    }
    return null;
}

function backtrack(visited: Map<number, number>, src: number, dest: number): number[] {
    let path = [dest];
    let leaf = dest;
    while (leaf !== src) {
        if (!visited.has(leaf)) {
            throw Error("Failed to backtrack the next root node");
        }
        const root = visited.get(leaf) as number;
        path.unshift(root);
        leaf = root;
    }
    return path;
}
