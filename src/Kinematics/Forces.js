import { Vector2D } from '@inwebo/vector'

export default class Forces {
  static EARTH_GRAVITY = 9.81 // Gravity on earth m / s / s

  /**
   * @param {Entity} entity
   */
  static move(entity) {
    entity.getVelocity().add(entity.getAcceleration())
    entity.getPosition().add(entity.getVelocity())
    entity.getAcceleration().zero()
  }

  /**
   * @param {Entity} entity
   * @param {Vector2D} force
   */
  static force(entity, force) {
    force.divideScalar(entity.getMass())
    entity.getAcceleration().add(force)
  }

  /**
   * @param {Entity} entity
   * @param {Number} value
   */
  static gravity(entity, value = 0.1) {
    const gravity = new Vector2D(0, entity.getMass() * value)
    Forces.force(entity, gravity)
  }

  /**
   * @param {Entity} entity
   * @param {Number} coefficient
   */
  static friction(entity, coefficient = 0.01) {
    const normal = 1
    const frictionMag = coefficient * normal

    const friction = entity.getVelocity().clone()
    friction.multiplyScalar(-1)
    friction.normalize()
    friction.multiplyScalar(frictionMag)

    Forces.force(entity, friction)
  }
}
