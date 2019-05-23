// Variables
var scene, camera, renderer, geometry, material, cube;

// Create a basic perspective camera
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 4;
// Create a renderer with Antialiasing
renderer = new THREE.WebGLRenderer({
    antialias : true
});

// Configure renderer clear color
renderer.setClearColor("#000000");
// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );
// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Create an empty scene
scene = new THREE.Scene();
// Create a Cube Mesh with basic material
geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.MeshBasicMaterial( {
    color : "#433F81" 
} );
cube = new THREE.Mesh( geometry, material );
// Add cube to Scene
scene.add( cube );

// Setting resizing function
window.addEventListener( 'resize', onWindowResize, false );

// Render Loop
animate();

// Animate function
function animate () 
{
    requestAnimationFrame( animate );
    // Rotate the cube		
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Render the scene
    renderer.render( scene, camera );
}

// Resizing function
function onWindowResize()
{
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
}
