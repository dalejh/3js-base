import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { createCamera } from "./components/camera"
import { createScene } from "./components/scene"
import { CubeScene } from "./scenes/CubeScene"
import { Controls } from "./systems/Controls"
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

        // orbit controls
        const controls = new Controls(camera, renderer.domElement)

        // SCENE
        const cubeScene = new CubeScene()
        scene.add(cubeScene.group)

        // add things to render/animate
        loop.updatables.push(controls, ...cubeScene.updatables)

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
