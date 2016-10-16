// Set the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x000000);

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
    requestAnimationFrame(animate);
    controls.update();
    render();
}

// Add lighting to scene
var light = new THREE.PointLight(0xffffff, 1.0);
camera.add(light);
scene.add(camera);

// Add axes
var axes = new createAxes(10);
scene.add(axes);

//Add a horsebody
var horseBody = new createHorseBody();
scene.add(horseBody);

var frontRightLeg = new createHorseLeg(0.5, -1, 2);
scene.add(frontRightLeg);

var frontLeftLeg = new createHorseLeg(-0.5, -1, 2);
scene.add(frontLeftLeg);

var backRightLeg = new createHorseLeg(0.5, -1, -2);
scene.add(backRightLeg);

var backLeftLeg = new createHorseLeg(-0.5, -1, -2);
scene.add(backLeftLeg);
