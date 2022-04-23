// These are directional lights that are available in 3js
// and roughly what they equate to
// DirectionalLight => Sunlight
// PointLight => Light Bulbs
// RectAreaLight => Strip lighting or bright windows
// SpotLight => Spotlights

import { DirectionalLight } from "three"

function createLights() {
    const light: DirectionalLight = new DirectionalLight("white", 8)
    // move the light right, up, and towards us
    light.position.set(10, 10, 10)

    return light
}

export { createLights }
