import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { createCamera } from "./components/camera"
import { createScene } from "./components/scene"
import { CubeScene } from "./scenes/CubeScene"
import { Controls } from "./systems/Controls"
import { Loop } from "./systems/Loop"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"

class World {
    private camera: PerspectiveCamera
    private renderer: WebGLRenderer
    private scene: Scene
    private loop: Loop
    private resizer: Resizer

    constructor(container: HTMLElement) {
        this.camera = createCamera()
        this.scene = createScene()
        this.renderer = createRenderer()
        this.loop = new Loop(this.camera, this.scene, this.renderer)
        container.append(this.renderer.domElement)

        // orbit controls
        const controls = new Controls(this.camera, this.renderer.domElement)

        // SCENES
        const cubeScene = new CubeScene()
        this.scene.add(cubeScene.group)

        // add things to render/animate
        this.loop.updatables.push(controls, ...cubeScene.updatables)

        this.resizer = new Resizer(container, this.camera, this.renderer)
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    start() {
        this.loop.start()
    }

    stop() {
        this.loop.stop()
    }
}

export { World }
