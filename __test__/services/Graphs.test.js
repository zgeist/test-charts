import {describe, expect} from "@jest/globals";
import Graphs from "../../services/Graphs";

describe('Graphs service', () => {
    const graphs = new Graphs('-2', '2', '0.5');
    it('is created', () => {
       expect(graphs).toBeDefined();
       expect(graphs).toBeTruthy();
    })

    it('check JSON', () => {
        expect(graphs.getJSON()).toHaveLength(3);
        expect(graphs.getJSON()[0]).toMatchObject({
            name: 'linear',
            x: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5],
            y: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5]
        });
        expect(graphs.getJSON()[1]).toMatchObject({
            name: 'square',
            x: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5],
            y: [4, 2.25, 1, 0.25, 0, 0.25, 1, 2.25, 4, 6.25]
        });
        expect(graphs.getJSON()[2]).toMatchObject({
            name: 'cube',
            x: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5],
            y: [-8, -3.38, -1, -0.13, 0, 0.13, 1, 3.38, 8, 15.63]
        });
    })
});
