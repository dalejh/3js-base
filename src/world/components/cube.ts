import { BoxGeometry, MathUtils, MeshStandardMaterial } from "three"
import { WorldMesh } from "./WorldMesh"

function createCube(): WorldMesh {
    const radiansPerSecond = MathUtils.degToRad(30)
    // create a geometry
    const geometry = new BoxGeometry()

    // create a default (white) Basic material
    const material = new MeshStandardMaterial({ color: "purple" })

    // create a Mesh containing the geometry and material
    const cube = new WorldMesh(geometry, material)
    cube.rotation.set(-0.5, -0.1, 0.8)
    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta
        cube.rotation.x += radiansPerSecond * delta
        cube.rotation.y += radiansPerSecond * delta
    }

    return cube
}

export { createCube }
