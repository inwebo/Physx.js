import Vector2D from "@inwebo/vector/src/Vector2D";
import Vector2DValidator from "@inwebo/vector/src/Vector2DValidator";

export default class Bounds {

    /**
     * @return {Vector2D}
     */
    getMin() {
        return this._min;
    }

    /**
     * @return {number}
     */
    getXMin() {
        return this._min.getX();
    }

    /**
     * @return {number}
     */
    getYMin() {
        return this._min.getY();
    }

    /**
     * @return {Vector2D}
     */
    getMax() {
        return this._max;
    }

    /**
     * @return {number}
     */
    getXMax() {
        return this._max.getX();
    }

    /**
     * @return {number}
     */
    getYMax() {
        return this._max.getY();
    }

    /**
     * @param {Vector2D|null} min
     * @param {Vector2D|null} max
     */
    constructor(min= null, max = null) {
        if(null !== min) {
            Vector2DValidator.validate(min);
        }
        if(null !== max) {
            Vector2DValidator.validate(max);
        }

        this._min = min || new Vector2D();
        this._max = max || new Vector2D();
    }

    /**
     * @param {number} number
     * @return {boolean}
     * @private
     */
    _inBoundsX(number) {
        return number <= this._max.getX() && number >= this._min.getX();
    }

    /**
     * @param {number} number
     * @return {boolean}
     * @private
     */
    _inBoundsXStrict(number) {
        return number < this._max.getX() && number > this._min.getX();
    }

    /**
     * @param {number} number
     * @param {boolean} _strict
     * @return {boolean}
     */
    inBoundsX(number, _strict = true) {
        return (_strict) ? this._inBoundsXStrict(number) : this._inBoundsX(number);
    }


    /**
     * @param {number} number
     * @return {boolean}
     * @private
     */
    _inBoundsY(number) {
        return number <= this._max.getY() && number >= this._min.getY();
    }

    /**
     * @param {number} number
     * @return {boolean}
     * @private
     */
    _inBoundsYStrict(number) {
        return number < this._max.getY() && number > this._min.getY();
    }

    /**
     * @param {number} number
     * @param {boolean} _strict
     * @return {boolean}
     */
    inBoundsY(number, _strict = true) {
        return (_strict) ? this._inBoundsYStrict(number) : this._inBoundsY(number);
    }

    /**
     * @param {Vector2D} vector
     * @return {boolean}
     * @private
     */
    _inBoundsStrict(vector) {
        Vector2DValidator.validate(vector);
        return this._inBoundsXStrict(vector.getX()) && this._inBoundsYStrict(vector.getY());
    }

    /**
     * @param {Vector2D} vector
     * @return {boolean}
     * @private
     */
    _inBounds(vector) {
        Vector2DValidator.validate(vector);
        return this._inBoundsX(vector.getX()) && this._inBoundsY(vector.getY());
    }

    /**
     * @param {Vector2D} vector
     * @param {boolean} _strict
     * @returns {boolean}
     */
    inBounds(vector, _strict = true) {
        Vector2DValidator.validate(vector);
        return (_strict) ? this._inBoundsStrict(vector) : this._inBounds(vector);
    }
}