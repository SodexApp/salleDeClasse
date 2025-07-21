 // Add raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Event listeners
    
    
    function isMobile() {
  return /Mobi/i.test(navigator.userAgent);
}
    
    function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

//if (isMobile()) {
    
    if (isTouchDevice()){
  window.addEventListener('touchstart', onTouchStart, false);
} else {
  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('click', onClick, false);
}



function onMouseMove(event) {
  updateMousePosition(event);
  raycaster.setFromCamera(mouse, camera);
}

function onTouchStart(event) {
  event.preventDefault();
  const touch = event.touches[0];
  const x = (touch.clientX / window.innerWidth) * 2 - 1;
  const y = -(touch.clientY / window.innerHeight) * 2 + 1;
  updateMousePosition(touch);
  raycaster.setFromCamera(mouse, camera);
  handleIntersections();
}

function updateMousePosition(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    
       // visibilité des elements image 2
           
              for (let j = 0; j < sphereNumeros2.length; j++) { 
                
                // console.log(camera.position.z);
                   if(camera.position.z<0){        
            sphereNumeros2[j].visible = false;
        titlePlanes2[j].visible = false
          }
           else{ sphereNumeros2[j].visible = true;
            titlePlanes2[j].visible = true
               }     
          }     

       for (let j = 0; j < sphereNumeros1.length; j++) { 
         //   var isToggleFunctionRunning = false;
                   if(camera.position.z<1){        
            sphereNumeros1[j].visible = true;
           titlePlanes1[j].visible = true
          }
           else{ sphereNumeros1[j].visible =false;
                titlePlanes1[j].visible = false
               }     
              
       }
}

function onClick(event) {
  raycaster.setFromCamera(mouse, camera);
  handleIntersections();
}

function handleIntersections() {
  

  

  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    const mesh = intersects[0].object;
    const name = mesh.name;
    const index = parseInt(name.substr(name.length-1)) ;
    
    //console.log('mouse clicked',mesh.position);
    
    console.log('mesh name',name)

    if (mesh.name.startsWith("sphereQuot")||mesh.name.startsWith("textQuot")) {
      for (let j = 0; j < sphereNumeros1.length; j++) {
       // videoSprites[j].visible = j === index;
       // comments[j].visible = j === index;
        if (j === index) {
         sphereNumeros1[j].material.opacity  = .4;
        //  videos[j].play();
          titlePlanes1[j].visible = true;
          updateCameraPositionAndTarget(mesh.position);
        } else {
       //   videos[j].pause();
          titlePlanes1[j].visible = false;
          sphereNumeros1[j].material.opacity  = .7;
        }
      }
    }
      if (mesh.name.startsWith("spherePer")||mesh.name.startsWith("perText")) {
        
      
      for (let j = 0; j < sphereNumeros2.length; j++) {
      
       // videoSprites[j].visible = j === index;
       // comments[j].visible = j === index;
        if (j === index) {
         sphereNumeros2[j].material.opacity  = .4;
        //  videos[j].play();
          titlePlanes2[j].visible = true;
          //updateCameraPositionAndTarget(mesh.position);
        } else {
       //   videos[j].pause();
          titlePlanes2[j].visible = false;
          sphereNumeros2[j].material.opacity  = .7;
        }
      }
         
    }
  }
 
}

function updateCameraPositionAndTarget(targetPosition) {
 const cameraOffsetX = -1;
  const cameraOffsetZ = -2;
  const cameraPosition = targetPosition.clone().add(new THREE.Vector3(cameraOffsetX, 0, cameraOffsetZ));
  gsap.to(camera.position, {
    x: cameraPosition.x,
    y: cameraPosition.y + .5,
    z: cameraPosition.z,
    duration: 4,
    ease: "power2.out"
  });
  controls.target.copy(targetPosition);
  //camera.up.set(0, 5, 0);
}