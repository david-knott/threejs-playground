var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);
camera.position.z = 250;
camera.lookAt(scene.position);

var directionalLight = new THREE.DirectionalLight(0xffeedd);
directionalLight.position.set(0, 0, 1).normalize();
scene.add(directionalLight);

// model
var mesh = null;

/*
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("https://threejs.org/examples/models/obj/walt/");
mtlLoader.load("WaltHead.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath("https://threejs.org/examples/models/obj/walt/");
    objLoader.load("WaltHead.obj", function (object) {
        mesh = object;
        mesh.position.y = -50;
        scene.add(mesh);
    });
});
*/

var objLoader = new THREE.OBJLoader();
   // objLoader.setMaterials(materials);
    objLoader.load("monster.obj", function (object) {
        mesh = object;
        mesh.position.y = 0;
        mesh.position.z = 0;
        scene.add(mesh);
    });
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xccccff);
document.body.appendChild(renderer.domElement);


var controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 1000, 1000, 1000 );
controls.enableKeys = true;
controls.enableZoom = true;
controls.enableRotate = true;
controls.update();

animate();

function animate() {
    requestAnimationFrame(animate);
	controls.update();
    renderer.render(scene, camera);
}
