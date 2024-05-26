import {useEffect} from "react";
import Phaser from "phaser";
import Main from "./scenes/main";
import Pausescreen from "./scenes/pauseScreen";
import Start from "./scenes/start";
import './styles/App.css'

function App() {
  useEffect(() => {
    const gameContainer = document.getElementById("game-content");

    if (!gameContainer) {
      console.error("Game container not found");
      return;
    }
   

    // Set the base width and height for your game
    const baseWidth = 500;
    const baseHeight = 500;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      title: "Peppermint Game",
      width: baseWidth,
      height: baseHeight,
      parent: "game-content",
      scene: [Start,Main,Pausescreen],
      backgroundColor: "#fef3cf",
      scale: {
        mode: Phaser.Scale.RESIZE, // Use resize mode for responsive scaling
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game on the screen
      },
      physics: {
        default: "arcade",
      },
    });

    return () => {
      game.destroy(true); // Cleanup Phaser game when component unmounts
    };
  }, []);

  return (
    <main className=" min-h-screen">
      <div className="h-20 mb-8 bg-primary filler"></div>
      <section>
        <div className="container mx-auto py-8">
          <div className="game-container">
            <div id="game-content" className="m-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App
