import { Behaviour, serializable } from "@needle-tools/engine";

export class Rotate extends Behaviour {
    @serializable()
    speed: number = 1;

    start() {
        console.log("Rotate start");
    }

    update() {
        this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
    }
}
