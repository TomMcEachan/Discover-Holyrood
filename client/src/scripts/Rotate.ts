import { Behaviour, serializable } from "@needle-tools/engine";

export class NewTypescript extends Behaviour {
    // @ts-ignore
    @serializable()
    myStringField: string = "Hello World";

    start() {}
}
