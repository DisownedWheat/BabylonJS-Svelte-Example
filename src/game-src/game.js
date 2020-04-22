import BABYLON from 'babylonjs';

export default class Game {
	constructor(elem) {
		this.engine = new BABYLON.Engine(elem, true);
		this.scene = new BABYLON.Scene(this.engine);
		this.scene.debugLayer.show();
	}

	setup() {
		this.scene.createDefaultCameraOrLight(true, true, true);
		let ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 5, height: 5 });
		ground.position.y -= 1;
		let sphere = BABYLON.MeshBuilder.CreateSphere('Sphere', { diameter: 1 });
	}

	run() {
		this.engine.runRenderLoop(() => this.scene.render());
	}
}
