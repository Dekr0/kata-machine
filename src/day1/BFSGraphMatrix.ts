import { log } from  "console";

export default function bfs(graph: WeightedAdjacencyMatrix, src: number, dest: number): number[] | null {
    let nodes = [src];
    let seens = new Map<number, number>();
    while (nodes.length > 0) {
        const root = nodes.shift() as number;
        if (root > graph.length) throw Error("Invalid node");
        for (let i = 0; i < graph[root].length; i++) {
            if (graph[root][i] === 0) continue;
            
            if (i === dest) {
                if (seens.has(i)) throw Error("Destination should not be seen");
                seens.set(i, root);
                return backtrack(seens, src, dest);
            }

            if (seens.has(i)) continue;

            seens.set(i, root);

            nodes.push(i);
        }
    }
    return null;
}

function backtrack(seens: Map<number, number>, src: number, dest: number): number[] {
    let path = [dest];
    let leaf = dest;
    while (leaf !== src) {
        log(path);
        if (!seens.has(leaf)) {
            throw Error("Failed to backtrack the next root node");
        }
        const root = seens.get(leaf) as number;
        path.unshift(root);
        leaf = root;
    }
    return path;
}
