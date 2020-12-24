import {Renderer2D} from "@inwebo/render.js";

export default class EntityRenderer extends Renderer2D{
    _draw([entity]) {

        this.getCtx().beginPath();
        this.getCtx().arc(entity.getPosition().getX(), entity.getPosition().getY(), 50, 0, 2 * Math.PI);
        this.getCtx().fillStyle = 'white'
        this.getCtx().fill();
    }
}