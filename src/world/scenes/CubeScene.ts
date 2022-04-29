import { Group } from "three"
import { createLights } from "../components/lights"
import { createCube } from "../components/cube"
import { Tickable } from "../types/tickable"

class CubeScene {
    updatables: Tickable[]
    group: Group

    constructor() {
        this.updatables = []
        this.group = new Group()

        const cube = createCube()
        const light = createLights()

        this.updatables.push(cube)

        this.group.add(cube, light)
    }
}

export { CubeScene }
