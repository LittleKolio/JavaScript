class Point {
    constructor(x, y) {
        [this.x, this.y] = [x, y];
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}