import {Bounds} from "../src";
import Vector2D from "@inwebo/vector/src/Vector2D";

const assert = require('assert');

describe('Bounds', () => {
    const bMin = new Vector2D(0,0);
    const bMax = new Vector2D(200, 200);

    const vXInStrict   = 199;
    const vXIn         = 200;

    const vYInStrict   = 199;
    const vYIn         = 200;

    const vXOutStrict  = 0;
    const vXOut        = -1;

    const vYOutStrict  = 200;
    const vYOut        = 201;


    const b = new Bounds(
        bMin,
        bMax
    );

    it('Getters', () => {
        assert.equal(b.getXMin(), 0);
        assert.equal(b.getYMin(), 0);

        assert.equal(b.getXMax(), 200);
        assert.equal(b.getYMax(), 200);

        assert.equal(b.getMin(), bMin);
        assert.equal(b.getMax(), bMax);
    });

    it('In strict', () => {
        assert.equal(b.inBoundsX(vXInStrict), true);
        assert.equal(b.inBoundsY(vYInStrict), true);
    });

    it('In', () => {
        assert.equal(b.inBoundsX(vXIn, false), true);
        assert.equal(b.inBoundsY(vYIn, false), true);
    });

    it('inBounds strict', () => {
        assert.equal(b.inBounds(new Vector2D(vXInStrict, vYInStrict), true), true);
    });

    it('inBounds', () => {
        assert.equal(b.inBounds(new Vector2D(vXIn, vYIn), false), true);
    });


    it('Out strict', () => {
        assert.equal(b.inBoundsX(vXOutStrict), false);
        assert.equal(b.inBoundsY(vYOutStrict), false);
    });

    it('Out', () => {
        assert.equal(b.inBoundsX(vXOut, false), false);
        assert.equal(b.inBoundsY(vYOut, false), false);
    });


    it('!inBounds strict', () => {
        assert.equal(b.inBounds(new Vector2D(vXOutStrict, vYOutStrict), true), false);
    });

    it('!inBounds', () => {
        assert.equal(b.inBounds(new Vector2D(vXOut, vYOut), false), false);
    });
});