let scene, camera, renderer;
let clouds = [];


// Create world
function createWorld(){

  scene = new THREE.Scene();


  // Fantasy sunset sky
  scene.background = new THREE.Color(0xff9966);


  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );


  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("gameCanvas"),
    antialias:true
  });


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  // Light
  let sun = new THREE.DirectionalLight(
    0xffddaa,
    2
  );

  sun.position.set(10,20,10);

  scene.add(sun);


  // Ground
  let groundGeo = new THREE.BoxGeometry(
    30,
    1,
    30
  );


  let grass = new THREE.MeshLambertMaterial({
    color:0x4f8f3a
  });


  let ground = new THREE.Mesh(
    groundGeo,
    grass
  );


  ground.position.y=-1;

  scene.add(ground);



  // Mountains
  for(let i=0;i<7;i++){

    let mountain = new THREE.Mesh(

      new THREE.ConeGeometry(
        4,
        8,
        5
      ),

      new THREE.MeshLambertMaterial({
        color:0x3f5f4a
      })

    );


    mountain.position.x =
    (i-3)*6;

    mountain.position.z=-8;

    scene.add(mountain);

  }



  // Floating magical particles
  let particleGeo =
  new THREE.BufferGeometry();


  let positions=[];


  for(let i=0;i<150;i++){

    positions.push(
      (Math.random()-0.5)*30,
      Math.random()*10,
      (Math.random()-0.5)*20
    );

  }


  particleGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      positions,
      3
    )
  );


  let particleMat =
  new THREE.PointsMaterial({
    color:0xffffaa,
    size:0.08
  });


  let particles =
  new THREE.Points(
    particleGeo,
    particleMat
  );


  scene.add(particles);



  camera.position.set(
    0,
    4,
    12
  );


  animate();

}



// Camera movement
function animate(){

  requestAnimationFrame(animate);


  camera.position.x =
  Math.sin(Date.now()*0.0002)*2;


  renderer.render(
    scene,
    camera
  );

}



createWorld();
