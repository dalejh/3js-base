import { PerspectiveCamera } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

class Controls extends OrbitControls {
    constructor(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
        super(camera, canvas)
        this.enableDamping = true
    }

    tick() {
        this.update()
    }
}

export { Controls }
