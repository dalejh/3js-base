import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { createCamera } from "./components/camera"
import { createCube } from "./components/cube"
import { createLights } from "./components/lights"
import { createScene } from "./components/scene"
import { Loop } from "./systems/Loop"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"

// These variables are module-scoped: we cannot access them
// from outside the module (i.e. inaccessible from react)
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let scene: Scene
let loop: Loop

class World {
    constructor(container: HTMLElement) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)
        container.append(renderer.domElement)

        const cube = createCube()
        const light = createLights()

        loop.updatables.push(cube)

        scene.add(cube, light)

        const resizer = new Resizer(container, camera, renderer)
    }

    render() {
        renderer.render(scene, camera)
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}

export { World }
