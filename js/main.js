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
