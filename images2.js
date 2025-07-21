var titlePlanes2 = [];
var sphereNumeros2 = [];

const texts2 = [
  "lavage des sols",
  "depoussierage \nsurfaces hautes",
  "Spray Method \nd'Entretien",
  "Nettoyage des Vitres",
  "Nettoyage des \nparties verticales\n(portes,murs)"

];

const names2 = [
  "sphere1",
  "sphere2",
  "sphere3",
  "sphere4",
  "sphere5"
];
const coordinates2 = [
  [2.5,0,3],
  [4, 2,4],
 [-.1, 0, 3],
  [-4.5,1.5, 3],
   [4.5, 1.8,3]
 
];


// création des plane text


for (let i = 0; i < coordinates2.length; i++) {
  const canvas2 = document.createElement("canvas");
  const context2 = canvas2.getContext("2d");
  const width = 300; // decrease the width of the canvas
  const height = 200; // decrease the height of the canvas
  canvas2.width = width;
  canvas2.height = height;
  context2.fillStyle = "orange"; //'rgba(0, 0, 0, 0)'; // set transparent background
  context2.fillRect(0, 0, width, height);
  context2.fillStyle = "black"; // set red color
  context2.font = "bold 30px Arial";
  context2.textAlign = "center";
  context2.textBaseline = "middle";
  // context2.fillText(texts[i],width / 2, height/ 2);
  const text = texts2[i];
  const lines = text.split("\n");
  const lineHeight = 40; // Adjust this value to adjust the spacing between lines
  const y = height / 2 - ((lines.length - 1) * lineHeight) / 2;

  for (let j = 0; j < lines.length; j++) {
    const line = lines[j];
    context2.fillText(line, width / 2, y + j * lineHeight);
  }

  const titleTexture = new THREE.CanvasTexture(canvas2);
  const titleMaterial = new THREE.SpriteMaterial({
    map: titleTexture,
    emissive: "orange", //0xcccccc,
    tranparent: true,
    opacity: .7, // set the color of the material
    side:THREE.FrontSide
    // set the opacity of the material
  });

 // const textSprite = new THREE.Sprite(material2); //replace by Planes
  
  //const titleGeo = new THREE.PlaneGeometry(1,1);
  
  const titlePlane = new THREE.Sprite(titleMaterial);
 titlePlane.name = "perText" + i;

 titlePlane.position.set(
    coordinates2[i][0]-.2,
    coordinates2[i][1]+.5 ,
    coordinates2[i][2]
  );
  //console.log(coordinates[i]);
  titlePlanes2.push(titlePlane);
  scene.add(titlePlane);
  //titlePlane.rotation.y= -Math.PI;
 

}



// creation des spriteNumeros



for (let i = 0; i < names2.length; i++) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 80; // decrease the width of the canvas
  const height = 80; // decrease the height of the canvas
  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "orange"; //'rgba(0, 0, 0, 0)'; // set transparent background
  context.fillRect(0, 0, width, height);
  context.fillStyle = "red"; // set red color
  context.font = "bold 24px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(String(i + 1), width / 2, height / 2);

  const texture = new THREE.CanvasTexture(canvas);

 

  const material = new THREE.MeshLambertMaterial({
    map: texture,
    side: THREE.FrontSide,
    color: "orange",
     transparent :true,
     opacity:0.8
  });

  //var geometry = new THREE.BoxGeometry(.5, .5,.5);
  var geometry = new THREE.SphereGeometry(.3,15,15)
  var sphereNumero = new THREE.Mesh(geometry, material);
  sphereNumero.name = "spherePer"+i;// "ball periodique"
  sphereNumero.position.set(
    coordinates2[i][0],
    coordinates2[i][1],
    coordinates2[i][2]
  );
  sphereNumero.rotation.y = Math.PI/2 ;
  // planeNumero.rotateY(THREE.Math.degToRad(-60));
  sphereNumeros2.push(sphereNumero);
  scene.add(sphereNumero);
}

// fonction clignotage des sprites
// Define a flag to control the toggle function
var isToggleFunctionRunning = true;

// Define the toggle function
var toggleFunction = setInterval(() => {
  if (isToggleFunctionRunning) {
    for (i=0;i<sphereNumeros2.length;i++){
    sphereNumeros2[i].material.opacity =  sphereNumeros2[i].material.opacity === 0.5 ? .9 : 0.5; // Toggle opacity between 0.7 and 1
    titlePlanes2[i].material.opacity =  titlePlanes2[i].material.opacity === 0.5 ? .9 : 0.5;
    }
  }
}, 2000); 