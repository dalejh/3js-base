import { World } from "./World/World"

function main() {
    const container: HTMLElement = document.querySelector("#scene-container")
    const world: World = new World(container)

    // produces a stream of frames at 60fps
    // we can instead render on demand with world.render()
    world.start()
}

main()
