import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { WorldMesh } from "../components/WorldObject"

const clock = new Clock()

class Loop {
    camera: PerspectiveCamera
    scene: Scene
    renderer: WebGLRenderer
    updatables: WorldMesh[]

    constructor(
        camera: PerspectiveCamera,
        scene: Scene,
        renderer: WebGLRenderer
    ) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.updatables = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick()
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        const delta = clock.getDelta()
        for (const obj of this.updatables) {
            obj.tick(delta)
        }
    }
}

export { Loop }
