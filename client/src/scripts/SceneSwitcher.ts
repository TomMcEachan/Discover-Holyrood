import { Behaviour, serializable, SceneSwitcher } from "@needle-tools/engine";

export class Rotate extends Behaviour {
    @serializable()
    Switcher: SceneSwitcher = new SceneSwitcher();
}
