import * as THREE from 'three';
import * as Orbit from 'three-orbit-controls';
let OrbitControls = Orbit(THREE);
// import PanoGroup from './PanoGroup';
// import LightGroup from './LightGroup';
export default class Main {
    public renderer: THREE.WebGLRenderer;
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;

    constructor(container) {
        this.init(container);
        this.run();
    }
    init(container) {
        let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0xF5F5F5)
        container.appendChild(renderer.domElement);
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 600);
        camera.position.z = 5;
        scene.add(camera);
        let orbitControls = new OrbitControls(camera, renderer.domElement);
        let planeGeometry = new THREE.BoxGeometry(1, 1, 1);
        let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random(), opacity: 0.9, transparent: true });
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.name = "floor";
        scene.add(plane);


        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    };
    run() {

        let that = this;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(function () { that.run() });
    }


}






