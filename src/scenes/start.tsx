import Phaser from "phaser";

export default class Start extends Phaser.Scene {

  constructor() {
    super("Start");
  }

  create() {
    // Display the name of the scene
    this.cameras.main.setBackgroundColor(0xffffff);
    this.add.text(100, 50, `TowerGame`, { fill: "#000" });

    // Add text for UI buttons
    const playGameText = this.add.text(100, 100, "Play", {
      fontSize: "24px",
      fill: "#000",
    });

    // Make text interactive
    playGameText.setInteractive();

    // Add event listener for "Play Game" button
    playGameText.on("pointerdown", () => {
        this.scene.stop();
        this.scene.launch("Main");
    });
  }
}
