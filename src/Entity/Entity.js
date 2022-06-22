import { Vector2D, Vector2DValidator } from '@inwebo/vector'
import BaseEntity from './BaseEntity'

export default class Entity extends BaseEntity {
  /**
   * @return {Vector2D}
   */
  getVelocity() {
    return this._velocity
  }

  /**
   * @param {Vector2D} vector
   * @return {Vector2D}
   */
  setVelocity(vector) {
    Vector2DValidator.validate(vector)
    this._velocity = vector
  }

  /**
   * @return {Vector2D}
   */
  getAcceleration() {
    return this._acceleration
  }

  /**
   * @param {Vector2D} vector
   * @return {Vector2D}
   */
  setAcceleration(vector) {
    Vector2DValidator.validate(vector)
    this._acceleration = vector
  }

  /**
   * @return {Number}
   */
  getMass() {
    return this._mass
  }

  /**
   * @param {Number} mass
   */
  setMass(mass) {
    this._mass = mass
  }

  /**
   * @param {Vector2D}      position
   * @param {Vector2D|null} velocity
   * @param {Vector2D|null} acceleration
   * @param {Number}        mass
   *
   * @throws TypeError if type of parameters are not Vector2D
   */
  constructor(position, velocity = null, acceleration = null, mass = 1) {
    super(position)
    Vector2DValidator.validate(velocity, acceleration)
    this._velocity = velocity || new Vector2D()
    this._acceleration = acceleration || new Vector2D()
    this._mass = mass
  }
}
