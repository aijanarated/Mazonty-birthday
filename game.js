let scene, camera, renderer;

function startGame(){

document.getElementById("start").style.display="none";

scene = new THREE.Scene();

scene.background = new THREE.Color(0x87ceeb);

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer({
canvas: document.getElementById("gameCanvas")
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);


// light
let light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,10,5);
scene.add(light);


// ground block
let geometry = new THREE.BoxGeometry(10,1,10);

let material = new THREE.MeshLambertMaterial({
color:0x55aa55
});

let grass = new THREE.Mesh(
geometry,
material
);

grass.position.y=-1;

scene.add(grass);


// camera position
camera.position.z = 5;
camera.position.y = 2;


animate();

}


function animate(){

requestAnimationFrame(animate);

renderer.render(
scene,
camera
);

}
