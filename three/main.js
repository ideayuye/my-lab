import * as THREE from 'three';
import './OrbitControls';

var camera, scene, renderer;
var geometry, material, mesh, texture, raycaster;
var isMoving, mouse = new THREE.Vector2();
var controls;

init();
animate();

function onMouseMove( event ) {
	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();
	var materialBasic = new THREE.MeshBasicMaterial({
		color: 0xffffff
	});
	texture = new THREE.TextureLoader().load('cloud.png');
	// material.map = texture;
	// materialBasic.map = texture;

	var spriteMaterial = new THREE.MeshBasicMaterial({map: texture, color: 0xffffff});
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.position.z = 0.3;
	
	mesh = new THREE.Mesh( geometry, 
		// material
		materialBasic
	);
	// scene.add( mesh );
	// scene.add( sprite );

	raycaster = new THREE.Raycaster();

	var bfmesh = tryBufferGeometry();
	scene.add(bfmesh);

	var plane = tryPlaneBufferGeometry();
	scene.add(plane);

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	renderer.domElement.addEventListener('mousemove', onMouseMove);
}

function tryBufferGeometry() {
	var geometry = new THREE.BufferGeometry();
	// create a simple square shape. We duplicate the top left and bottom right
	// vertices because each vertex needs to appear once per triangle.
	var vertices = new Float32Array( [
		-0.1, -0.1,  0.11,
		0.1, -0.1,  0.1,
		0.1,  0.1,  0.12,
		0,  0.1,  0.6,

		// 1.0,  1.0,  1.0,
		// -1.0,  1.0,  0.3,
		// -1.0, -1.0,  0.6,

		// -0.5, -0.5,  0.6
	] );

	// vertices = vertices.forEach(v => v*0.1);

	// itemSize = 3 because there are 3 values (components) per vertex
	geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var mesh = new THREE.Mesh( geometry, material );
	return mesh;
}

function tryPlaneBufferGeometry() {
	var geometry = new THREE.PlaneBufferGeometry( 1, 1, 32 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	var plane = new THREE.Mesh( geometry, material );
	return plane
}

function animate() {
	requestAnimationFrame( animate );

	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += 0.02;

	if (mouse.x !==0 || mouse.y !== 0) {
		raycaster.setFromCamera(mouse, camera);
		var intersects = raycaster.intersectObjects(scene.children);
		scene.children.forEach(v => {
			// console.log(v);
			v.material.color.set(0xffffff);
		});

		intersects.forEach(v => {
			// v.object.material.color.set(0xff0000);
		});
	}

	renderer.render( scene, camera );

}