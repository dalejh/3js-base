import { World } from "./World/World"

function main() {
    // Get a reference to the container element
    const container: HTMLElement = document.querySelector("#scene-container")

    // 1. Create an instance of the World app
    const world: World = new World(container)

    // 2. Render the scene
    world.render()
}

main()
