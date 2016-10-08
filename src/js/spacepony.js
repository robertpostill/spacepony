// Set the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x0000ff);
window.onkeyup = handleKeyUp;
window.onkeydown = handleKeyDown;

// Adds the specific keys
var keys = {
    q: 81,
    w: 87,
    a: 65,
    s: 83,
    z: 90,
    x: 88,
    e: 69,
    r: 82,
};
var keysDown = new Array();

camera.position.z = 2;

// Render trackball controls
var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);
renderer.render(scene, camera);
animate();

function render() {
    renderer.render(scene, camera);
}

function animate() {
    handleKeys();
    requestAnimationFrame(animate);
    controls.update();
    render();
    //handleKeys();
}

// Add lighting to scene
var light = new THREE.PointLight(0xffffff, 1.0);
camera.add(light);
scene.add(camera);

// Add axes
var axes = new createAxes(10);
scene.add(axes);
