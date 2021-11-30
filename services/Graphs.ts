class Graphs {
    public from: number;

    public to: number;

    public step: number;

    constructor(from: string, to: string, step: string) {
        this.from = parseFloat(from);
        this.to = parseFloat(to);
        this.step = parseFloat(step);
    }

    private calc(from: number, to: number, step: number) {
        const linearX = [];
        const linearY = [];
        const squareX = [];
        const squareY = [];
        const cubeX = [];
        const cubeY = [];

        while (from <= to + step) {
            const [lx, ly] = this.linear(from);
            const [sx, sy] = this.square(from);
            const [cx, cy] = this.cube(from);

            linearX.push(lx);
            linearY.push(ly);
            squareX.push(sx);
            squareY.push(sy);
            cubeX.push(cx);
            cubeY.push(cy);

            from += step;
        }

        return [
            {
                name: 'linear',
                x: linearX,
                y: linearY
            },
            {
                name: 'square',
                x: squareX,
                y: squareY
            },
            {
                name: 'cube',
                x: cubeX,
                y: cubeY
            }
        ];
    }

    private linear(x: number) {
        return [parseFloat(x.toFixed(2)), parseFloat(x.toFixed(2))];
    }

    private square(x: number) {
        return [parseFloat(x.toFixed(2)), parseFloat(Math.pow(x, 2).toFixed(2))];
    }

    private cube(x: number) {
        return [parseFloat(x.toFixed(2)), parseFloat(Math.pow(x, 3).toFixed(2))];
    }

    public getJSON() {
        return this.calc(this.from, this.to, this.step);
    }
}

export default Graphs;
