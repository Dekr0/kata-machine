class Node {
    public isKey: boolean
    public links: Map<number, Node>

    public constructor() {
        this.isKey = false;
        this.links = new Map<number, Node>();
    }
}

export default class Trie {
    private root: Node;
    
    public constructor() {
        this.root = new Node();
    }

    public insert(key: string): void {
        let next = this.root;
        for (const c of key) {
            const charCode = c.charCodeAt(0);
            if (!next.links.has(charCode)) {
                next.links.set(charCode, new Node());
            }
            const unsafe = next.links.get(charCode);
            if (!unsafe) throw Error("Undefine key-value pair");
            next = unsafe;
        }
        next.isKey = true;
    }

    public delete(key: string): void {
        this._delete(this.root, key, 0);
    }

    private _delete(node: Node, key: string, i: number): Node | null {
        if (i === key.length) {
            node.isKey = false;
        } else {
            const charCode = key[i].charCodeAt(0);
            if (!node.links.has(charCode)) return null;

            const unsafe = node.links.get(charCode);
            if (!unsafe) throw Error("Undefine key-value pair");
       
            const result = this._delete(unsafe, key, i + 1);
            
            if (!result) node.links.delete(charCode);
        }

        return node.links.size === 0 ? null : node;
    }

    public find(partial: string): string[] {
        let next = this.root;
        for (const c of partial) {
            const charCode = c.charCodeAt(0);
            if (!next.links.has(charCode)) return [];
            const unsafe = next.links.get(charCode);
            if (!unsafe) throw Error("Undefine key-value pair");
            next = unsafe;
        }
        const result: string[] = [];
        this.collect(next, partial, result);
        return result;
    }

    private collect(trie: Node, str: string, matches: string[]): void {
        if (trie.links.size === 0 && !trie.isKey) return;

        if (trie.links.size === 0 && trie.isKey) { matches.push(str); return; }

        if (trie.isKey) matches.push(str);

        for (const k of trie.links.keys()) {
            const unsafe = trie.links.get(k);
            if (!unsafe) throw Error("Undefine key-value pair");
            this.collect(unsafe, str.concat(String.fromCharCode(k)), matches);
        }
    }
}

/* Working
class Node<T> {
    value: T | undefined 
    links: Map<number, Node<T>>
    
    public constructor(value: T | undefined = undefined) {
        this.value = value;
        this.links = new Map<number, Node<T>>;
    }
}

export default class Trie {
    private root: Node<number>;

    public constructor() {
        this.root = new Node();
    }

    public insert(key: string): void {
        let next = this.root;
        for (const c of key) {
            const charCode = c.charCodeAt(0);

            if (!next.links.has(charCode)) {
                next.links.set(charCode, new Node<number>());
            }

            const node = next.links.get(charCode); if (!node) throw Error("Exception occurs");

            next = node;
        }
        next.value = 1;
    }

    public insertR(key: string): void { this._insert(this.root, key, 0); }

    private _insert(node: Node<number>, key: string, index: number) {
        if (index === key.length) {
            node.value = 1;
        } else {
            const charCode = key[index].charCodeAt(0);

            if (!node.links.has(charCode)) {
                node.links.set(charCode, new Node<number>());
            }

            const nextNode = node.links.get(charCode); if (!nextNode) throw Error("Exception occurs");

            this._insert(nextNode, key, index + 1);
        }
    }

    public delete(key: string): void {
    }

    public find(partial: string): string[] {
        let next = this.root;
        for (const c of partial) {
            const charCode = c.charCodeAt(0);

            if (!next.links.has(charCode)) return [];

            const node = next.links.get(charCode); if (!node) throw Error("Exception occurs");

            next = node;
        }
        
        const matches = [];
        const stack: { node: Node<number>, seq: string }[] = [
            { node: next, seq: partial }
        ];

        while (stack.length > 0) {
            log(matches);
            const top = stack.pop();

            if (!top) throw Error("Exception occurs");

            const { node, seq } = top;

            if (node.value) matches.push(seq);

            for (const charCode of node.links.keys()) {
                const c = String.fromCharCode(charCode);
                const v = node.links.get(charCode); if (!v) throw Error("Exception occurs");
                stack.push({ node: v, seq: seq + c });
            }
        }

        return matches;
    }

    public findR(partial: string): string[] {
        const matches: string[] = [];

        this._find(this.root, "", partial, 0, matches)

        return matches;
    }

    private _find(node: Node<number>, seq: string, pat: string, i: number, matches: string[]) {
        if (i === pat.length) {
        }
    }
}
*/
