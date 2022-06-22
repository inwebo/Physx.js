import {Entity} from "../../../../src";
import {Vector2D} from "@inwebo/vector";
import EntityRenderer from "../renderers/EntityRenderer";
import Forces from "../../../../src/Kinematics/Forces";

const demo1 = () => {
    const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;

    const canvas   = document.getElementById('demo-1');
    const entity   = new Entity(new Vector2D(320, 240));
    entity.setAcceleration(new Vector2D(0.5,0));
    const renderer = new EntityRenderer(canvas);

    renderer.draw(entity);

    setInterval(() => {
        Forces.move(entity);
        renderer.draw(entity);
    }, 10);
};

export default demo1;
