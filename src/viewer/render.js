// three.js render script 
var width = 640, height = 480;
var container = document.getElementById("screen");
container.style.width  = width  + "px";
container.style.height = height + "px";
var camera, controls, scene, renderer;
var scene;
var light, light2;
var axis;

function initThree(){

    // width  = container.clientWidth;
    // height = container.clientHeight;

    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
}

function initCameara(){
    camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
    camera.up.x = 0; camera.up.y = 0; camera.up.z = 1;
    camera.position.set(1394, 1416, 854);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function initScene(){
    scene = new THREE.Scene();
}

function initLight(){
    light = new THREE.DirectionalLight(0xcccccc, 1.6);
    light.position = new THREE.Vector3(0.577, 0.577, 0.577);
    light.castShadow = true;
    scene.add(light);
    
    light2 = new THREE.AmbientLight(0x333333);
    scene.add(light2);
}

function initObject(){
    axis = new THREE.AxisHelper(1000);             
    scene.add(axis);                              
    axis.position.set(0,0,1);   
}

function loop(){
    renderer.clear();
    renderer.render(scene, camera);
    controls.update();
    window.requestAnimationFrame(loop);
}

function threeStart(){
    initThree();
    initCameara();
    initScene();
    initLight();
    initObject();
    loop();
}