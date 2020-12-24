import {Entity} from "../../../../src";
import {Vector2D} from "@inwebo/vector";
import EntityRenderer from "../renderers/EntityRenderer";

const demo1 = () => {
    const canvas   = document.getElementById('demo-1');
    const entity   = new Entity(new Vector2D(320, 240));
    entity.setMass(4);
    const renderer = new EntityRenderer(canvas);

    renderer.draw(entity);

    setInterval(() => {
        entity.setPosition(entity.getPosition().add(new Vector2D(2,0)));
        renderer.draw(entity);
    }, 10);
};

export default demo1;
