import Phaser from "phaser";

export default class Pausescreen extends Phaser.Scene {

  constructor() {
    super("Pausescreen");
  }

  create() {
    // Display the name of the scene
    this.cameras.main.setBackgroundColor(0xffffff);
    this.add.text(100, 50, `Pause Game`, { fill: "#000" });

    // Add text for UI buttons
    const playGameText = this.add.text(100, 100, "Resume", {
      fontSize: "24px",
      fill: "#000",
    });

    const backToMapText = this.add.text(100, 150, "Back to Map", {
      fontSize: "24px",
      fill: "#000",
    });

    // Make text interactive
    playGameText.setInteractive();
    backToMapText.setInteractive();

    // Add event listener for "Play Game" button
    playGameText.on("pointerdown", () => {
      this.scene.stop();
     
        this.scene.resume("Main");
      
    });

    // Add event listener for "Quit Game" button
    backToMapText.on("pointerdown", () => {
      this.scene.stop();
      this.scene.launch("Start");
 
    });
  }
}
