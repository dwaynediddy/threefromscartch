// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 
'https://cdn.skypack.dev/pin/three@v0.128.0-4xvsPydvGvI2Nx1Gbe39/mode=imports/optimized/three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

const render = new THREE.WebGLRenderer()

console.log(scene)
console.log(camera)
console.log(render)

document.body.appendChild(render.domElement)

