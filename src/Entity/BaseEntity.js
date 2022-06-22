import { Vector2D, Vector2DValidator } from '@inwebo/vector'

export default class BaseEntity {
  /**
   * @return {Vector2D}
   */
  getPosition() {
    return this._position
  }

  /**
   * @param {Vector2D} vector
   */
  setPosition(vector) {
    Vector2DValidator.validate(vector)
    this._position = vector
  }

  /**
   * @param {Vector2D} position
   *
   * @throws TypeError if type of parameters are not Vector2D
   */
  constructor(position) {
    Vector2DValidator.validate(position)
    this._position = position
  }
}
