/**
Three.js uses the concept of a display list.
All objects are stored in the list and in consequence they will show up in the screen.
The THREE.Scene object is the key element.
You need to add any object you want to be drawn on the screen to the scene.
You can have as many scenes as you want,
but one renderer can draw only one scene at once (of course you can switch the scene that is displayed).
The renderer simply draws everything from the scene to the WebGL canvas.
Three.js also supports drawing on SVG or 2D Canvas, but we will focus on WebGL.
taken from: https://code.tutsplus.com/tutorials/webgl-with-threejs-basics--net-35688
*/

/* 1)  lets store the window's width and height in variables */

var width = window.innerWidth;
var height = window.innerHeight;

/* 2)  STEP 2 Define the RENDERER and the SCENE: */
  //The first line defines the WebGL renderer. You can pass the renderer's options in the first argument as a map.
  //Here, we set the antialias to true, because we want the edges of objects to be smooth, not jagged.
var renderer = new THREE.WebGLRenderer({ antialias: true });

  //The second line sets the renderer size to the size of the window
renderer.setSize(width, height);

  //The third one we add the renderer's canvas element to the document
  //(you can also do this using a library, like jQuery:
  //$('body').append(renderer.domElement)).
document.body.appendChild(renderer.domElement);

  //The fourth line defines the scene, no arguments needed.
var scene = new THREE.Scene;


/* 3) STEP 3 Adding a Cube
In Three.js the objects that are being drawn on the screen are called meshes.
Each mesh has to have its own geometry and material.
  --> Geometry is a set of points that need to be connected in order to create the object.
  --> Material is simply the paint that will cover the object, the texture */

  //First we create the geometry, the cube with width, height and depth
var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);

  //Second: We define the cube's material.
  //There are a few material types in Three.js, but this time we will use the THREE.MeshLambertMaterial,
  //since we want to have some lighting later (this material uses Lambert's algorithm for light calculations).
  // Here, we only use color, which is passed as a hexadecimal number.

var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 });

  //Third: We instantiate the mesh by using the geometry and the material
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  //Forth: we rotate the cube by 45 degrees on the Y axis, to make it look better.
  //We have to change degrees to radians, which is handled by the equation: Math.PI * 45 / 180.
cube.rotation.y = Math.PI * 45 / 180;

  //Finally we add the cube to the scene
scene.add(cube);

  // At this point you can open the index.html file but you will see nothing, because the mesh is added to the scene but
  // It needs to be RENDERED. That will be done on the next Step
