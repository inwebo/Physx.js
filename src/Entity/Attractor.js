import { Vector2D } from '@inwebo/vector'
import { BaseEntity } from '@/index'

export default class Attractor extends BaseEntity {
  /**
   * @param {Vector2D} position
   * @param {number} mass
   */
  constructor(position, mass) {
    super(position)
    this._G = 10
    this._mass = mass
  }

  /**
   * @param {Vector2D} vector
   */
  attract(vector) {
    const force = Vector2D.substract(this._position, vector)
    const distance = force.magnitude()
    const strength = (this._G * this._mass * v._mass) / (distance * distance)
    force.multiply(strength)
  }
}
