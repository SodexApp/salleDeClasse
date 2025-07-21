var titlePlanes1 = [];
var sphereNumeros1 = [];


const texts1 = [

  "lavage des mains \nAération\nBalisage",
  "ramassage \ngros déchets",
  "vidage des corbeilles",
  "Nettoyage du tableau",
  "detachage \ndes tables",
  "lavage des tables",
  "depousierage \nlavage Sol",
  "points de contact"]

const names1 = [
  "sphere1",
  "sphere2",
  "sphere3",
  "sphere4",
  "sphere5",
  "sphere6",
  "sphere7",
  "sphere8"
];
const coordinates1 = [
  [-4.5,2, 1],
  [0,-.2, -3],
  [2.7, 0,4],
  [.3, 1, 4],
  [2, .6, -1],
  [-2,.6,-1],
  [0,-.2, 0],
  [4.7,1,3]
 
];

// création des plane text


for (let i = 0; i < coordinates1.length; i++) {
  const canvas2 = document.createElement("canvas");
  const context2 = canvas2.getContext("2d");
  const width = 300; // decrease the width of the canvas
  const height = 200; // decrease the height of the canvas
  canvas2.width = width;
  canvas2.height = height;
  context2.fillStyle = "lightgreen"; //'rgba(0, 0, 0, 0)'; // set transparent background
  context2.fillRect(0, 0, width, height);
  context2.fillStyle = "black"; // set red color
  context2.font = "bold 30px Arial";
  context2.textAlign = "center";
  context2.textBaseline = "middle";
  //context2.fillText(texts1[i],width / 2, height/ 2);
  const text = texts1[i];
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
    emissive: "lightgreen", //0xcccccc,
    tranparent: true,
    opacity: .7, // set the color of the material
    side:THREE.FrontSide

    // set the opacity of the material
  });

 // const titleGeo = new THREE.PlaneGeometry(1,1);
  
  const titlePlane = new THREE.Sprite(titleMaterial);  
  titlePlane.name = "textQuot" + i;

  titlePlane.position.set(
    coordinates1[i][0]-.2,
    coordinates1[i][1]+.4 ,
    coordinates1[i][2]
  );
  //console.log(coordinates[i]);
  titlePlanes1.push(titlePlane);
  scene.add(titlePlane);
 titlePlane.rotation.y =- Math.PI;

}


// creation des spriteNumeros

//var boxes numberSprites = [];

for (let i = 0; i < names1.length; i++) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 80; // decrease the width of the canvas
  const height = 80; // decrease the height of the canvas
  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "lightgreen"; //'rgba(0, 0, 0, 0)'; // set transparent background
  context.fillRect(0, 0, width, height);
  context.fillStyle = "red"; // set red color
  context.font = "bold 24px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(String(i + 1), width / 2, height / 2);

  const texture = new THREE.CanvasTexture(canvas);

  // creation de plane numero  au lieu de sprite

  const material = new THREE.MeshLambertMaterial({
    map: texture,
    side: THREE.FrontSide,
    color: "lightgreen",
     transparent :true,
     opacity:0.8
  });

  //var geometry = new THREE.BoxGeometry(.5, .5,.5);
  var geometry = new THREE.SphereGeometry(.3,15,15)
  var sphereNumero = new THREE.Mesh(geometry, material);
   sphereNumero.name = "sphereQuot" + i;
   sphereNumero.position.set(
    coordinates1[i][0],
    coordinates1[i][1],
    coordinates1[i][2]
  );
  sphereNumero.rotation.y = Math.PI/2 ;
  // planeNumero.rotateY(THREE.Math.degToRad(-60));
  sphereNumeros1.push(sphereNumero);
  scene.add(sphereNumero);
}

