/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

const { __esModule } = require("cucumber");

class Circle {

    constructor(r) {


        if (r <= 0) {
            throw new Error("invalid radius")
        } else {
            this.r = r;

        }

    }

    getArea() {

        return this.r * this.r * Math.PI;

    }

    getPerimeter() {
        return 2 * this.r * Math.PI;

    }
}

module.exports = Circle;