import { Vector2D } from "@inwebo/vector";
import Entity from "../Entity/Entity";

export default class Kinetics {
    /**
     * @param {Entity} entity
     */
    static move(entity) {
        entity.getVelocity().add(entity.getAcceleration());
        entity.getPosition().add(entity.getVelocity());
        entity.getAcceleration().zero();
    }

    /**
     * @param {Entity} entity
     * @param {Vector2D} force
     */
    static force(entity, force) {
        force.divideScalar(entity.getMass());
        entity.getAcceleration().add(force);
    }

    /**
     * @param {Entity} entity
     * @param {Number} value
     */
    static gravity(entity, value = 0.1) {
        const gravity = new Vector2D(0, entity.getMass() * value)
        Kinetics.force(entity, gravity);
    }

    /**
     * @param {Entity} entity
     * @param {Number} coefficient
     */
    static friction(entity, coefficient = 0.01) {
        const friction = entity.getVelocity().clone();
    }
}