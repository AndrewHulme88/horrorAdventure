let currentScene = 'start';

const scenes = {
    start: {
        text: 'Welcome to Haunted Island! You find yourself stranded on a desolate island. The moon casts an eerie glow over the landscape. A dense fog envelops everything, obscuring your vision. Ahead of you is a dark forest. To your right, there\'s an old, decrepit mansion. To your left, you see a crumbling graveyard.',
        buttons: [
            { text: 'Forest', nextScene: 'forest' },
            { text: 'Mansion', nextScene: 'mansion' },
            { text: 'Graveyard', nextScene: 'graveyard' }
        ]
    },
    forest: {
        text: 'You venture forth into the dark forest. The trees seem to close in around you as you proceed deeper into the forest. You come across an abandoned cabin.',
        buttons: [
            { text: 'Enter Cabin', nextScene: 'cabin' },
            { text: 'Turn Back', nextScene: 'start' }
        ]
    },
    cabin: {
        text: 'You cautiously open the door to the cabin and step inside. The interior of the cabin is shrouded in darkness. Suddenly, you hear a blood-curdling scream.',
        buttons: [
            { text: 'Investigate Scream', nextScene: 'investigate' },
            { text: 'Flee from Cabin', nextScene: 'start' }
        ]
    },
    mansion: {
        text: 'You approach the old, decrepit mansion, its windows shattered and ivy creeping up the walls. As you step inside, the musty air fills your lungs, and you feel a sense of dread.',
        buttons: [
            { text: 'Explore Mansion', nextScene: 'explore' },
            { text: 'Leave Mansion', nextScene: 'start' }
        ]
    },
    graveyard: {
        text: 'You cautiously make your way through the crumbling graveyard, tombstones looming ominously in the moonlight. As you pass by an ancient mausoleum, you hear a faint scratching sound coming from within.',
        buttons: [
            { text: 'Investigate Mausoleum', nextScene: 'mausoleum' },
            { text: 'Continue on Path', nextScene: 'start' }
        ]
    },
    investigate: {
        text: 'You gather your courage and follow the sound deeper into the cabin. You stumble upon a ghastly sight: a ghostly figure writhing in agony. Before you can react, it lunges at you, enveloping you in darkness.',
        buttons: [
            { text: 'Game Over', nextScene: 'gameover' }
        ]
    },
    explore: {
        text: 'You decide to explore the mansion further. As you proceed deeper into the mansion, you come across a room with a mysterious artifact.',
        buttons: [
            { text: 'Take Artifact', nextScene: 'artifact' },
            { text: 'Leave Room', nextScene: 'mansion' }
        ]
    },
    mausoleum: {
        text: 'You cautiously approach the mausoleum and push open the heavy stone door. Inside, you find a coffin with claw marks etched into the wood. Before you can react, the lid begins to creak open.',
        buttons: [
            { text: 'Game Over', nextScene: 'gameover' }
        ]
    },
    artifact: {
        text: 'You take the artifact, and as soon as you do, you hear a loud noise behind you. You turn around to see a group of ghosts emerging from the shadows.',
        buttons: [
            { text: 'Game Over', nextScene: 'gameover' }
        ]
    },
    gameover: {
        text: 'Game Over! You died.',
        buttons: [
            { text: 'Play Again', nextScene: 'start' }
        ]
    }
};

function renderScene() {
    const scene = scenes[currentScene];
    const gameText = document.getElementById('game-text');
    const gameButtons = document.getElementById('game-buttons');

    gameText.innerText = scene.text;

    gameButtons.innerHTML = '';
    scene.buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('game-button');
        buttonElement.innerText = button.text;
        buttonElement.onclick = () => {
            currentScene = button.nextScene;
            renderScene();
        };
        gameButtons.appendChild(buttonElement);
    });
}

renderScene();
