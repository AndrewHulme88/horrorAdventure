const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Haunted Island!");
console.log("You find yourself stranded on a desolate island. The moon casts an eerie glow over the landscape. A dense fog envelops everything, obscuring your vision.");
console.log("Ahead of you is a dark forest. To your right, there's an old, decrepit mansion. To your left, you see a crumbling graveyard.");

rl.question("Which way would you like to go? F (Forest) M (Mansion) or G (Graveyard)\n", (path_1) => {
  path_1 = path_1.toUpperCase();

  if (path_1 === "F") {
    console.log("You venture forth into the dark forest.");

    console.log("The trees seem to close in around you as you proceed deeper into the forest.");
    rl.question("You come across an abandoned cabin. Will you enter the cabin, or turn back? C (Cabin) or B (Back)\n", (path_2) => {
      path_2 = path_2.toUpperCase();

      if (path_2 === "C") {
        console.log("You cautiously open the door to the cabin and step inside.");

        console.log("The interior of the cabin is shrouded in darkness. Suddenly, you hear a blood-curdling scream.");
        rl.question("Do you investigate the source of the scream, or flee from the cabin? I (Investigate) or F (Flee)\n", (path_3) => {
          path_3 = path_3.toUpperCase();

          if (path_3 === "I") {
            console.log("You gather your courage and follow the sound deeper into the cabin.");

            console.log("You stumble upon a ghastly sight: a ghostly figure writhing in agony. Before you can react, it lunges at you, enveloping you in darkness.");
            console.log("GAME OVER!");
            rl.close();
          } else if (path_3 === "F") {
            console.log("Your instincts scream at you to flee from the cabin as fast as you can.");

            console.log("You burst through the door and sprint into the forest, heart pounding in your chest.");
            console.log("You manage to escape the cabin, but the terror of what you witnessed haunts you forever.");
            console.log("YOU SURVIVED... BUT AT WHAT COST?");
            rl.close();
          } else {
            console.log("GAME OVER!");
            rl.close();
          }
        });
      } else if (path_2 === "B") {
        console.log("You decide it's best to leave the cabin undisturbed and continue your journey through the forest.");

        console.log("As you walk deeper into the forest, the shadows seem to come alive, whispering sinister secrets.");
        console.log("You feel a chill run down your spine as you realize you're not alone in the darkness.");
        console.log("Suddenly, a pair of glowing eyes emerge from the shadows, and you're consumed by darkness...");
        console.log("GAME OVER!");
        rl.close();
      } else {
        console.log("GAME OVER!");
        rl.close();
      }
    });
  } else if (path_1 === "M") {
    console.log("You approach the old, decrepit mansion, its windows shattered and ivy creeping up the walls.");

    console.log("As you step inside, the musty air fills your lungs, and you feel a sense of dread.");
    console.log("You hear strange whispers echoing through the halls.");
    console.log("Suddenly, the floor gives way beneath you, and you plummet into the darkness below...");
    console.log("GAME OVER!");
    rl.close();
  } else if (path_1 === "G") {
    console.log("You cautiously make your way through the crumbling graveyard, tombstones looming ominously in the moonlight.");

    console.log("As you pass by an ancient mausoleum, you hear a faint scratching sound coming from within.");
    console.log("Do you investigate the mausoleum, or continue on your path? I (Investigate) or C (Continue)\n", (path_2) => {
      path_2 = path_2.toUpperCase();

      if (path_2 === "I") {
        console.log("You cautiously approach the mausoleum and push open the heavy stone door.");

        console.log("Inside, you find a coffin with claw marks etched into the wood. Before you can react, the lid begins to creak open...");
        console.log("GAME OVER!");
        rl.close();
      } else if (path_2 === "C") {
        console.log("You decide it's best to avoid the mausoleum and continue on your path through the graveyard.");

        console.log("As you walk among the graves, you feel an icy presence watching you from the shadows.");
        console.log("You quicken your pace, but the feeling of dread only grows stronger...");
        console.log("Suddenly, skeletal hands burst forth from the earth, dragging you down into the depths below...");
        console.log("GAME OVER!");
        rl.close();
      } else {
        console.log("GAME OVER!");
        rl.close();
      }
    });
  } else {
    console.log("GAME OVER!");
    rl.close();
  }
});
