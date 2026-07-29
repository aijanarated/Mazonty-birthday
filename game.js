let scene;
let camera;
let renderer;


function createWorld(){

  scene = new THREE.Scene();

  // sky
  scene.background = new THREE.Color(0xff9966);


  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
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
  let light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);


  // big grass block
  let block = new THREE.Mesh(
    new THREE.BoxGeometry(10,1,10),
    new THREE.MeshBasicMaterial({
      color:0x4caf50
    })
  );

  block.position.y = -1;

  scene.add(block);


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


createWorld();
