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

    static gravity(entity) {
        
    }
}