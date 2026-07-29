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


function addTree(x,z){

  // trunk
  let trunk = new THREE.Mesh(
    new THREE.BoxGeometry(0.8,3,0.😎,
    new THREE.MeshLambertMaterial({
      color:0x7a4a22
    })
  );

  trunk.position.set(x,0.5,z);
  scene.add(trunk);


  // leaves
  let leaves = new THREE.Mesh(
    new THREE.SphereGeometry(2,8,8),
    new THREE.MeshLambertMaterial({
      color:0x2f7d32
    })
  );

  leaves.position.set(x,2.5,z);
  scene.add(leaves);

}



function addCastle(){

  // castle body
  let castle = new THREE.Mesh(
    new THREE.BoxGeometry(6,5,4),
    new THREE.MeshLambertMaterial({
      color:0x888888
    })
  );

  castle.position.set(0,1.5,-12);
  scene.add(castle);



  // tower
  let tower = new THREE.Mesh(
    new THREE.CylinderGeometry(1,1,8,6),
    new THREE.MeshLambertMaterial({
      color:0x777777
    })
  );

  tower.position.set(3,3,-12);
  scene.add(tower);


  // glowing entrance
  let door = new THREE.Mesh(
    new THREE.BoxGeometry(1,2,0.2),
    new THREE.MeshBasicMaterial({
      color:0xffcc55
    })
  );

  door.position.set(0,-0.5,-14.1);
  scene.add(door);

}
createWorld();

addTree(-6,-3);
addTree(6,-2);
addTree(-10,-8);
addTree(10,-7);

addCastle();
