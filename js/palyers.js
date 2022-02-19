
function setPlayerStyle(player) {
    player.style.border = '2px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    // console.log(player);
    setPlayerStyle(player)
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'blue';
    // })
}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">player - 2</h4>
    <p>Vitae fugit eligendi repellat labore! Cumque beatae cupiditate quas corrupti minima, accusantium
        error? Voluptatibus, ipsum vitae. Ratione assumenda delectus deserunt eligendi modi libero,
        voluptates enim saepe est fugiat, iste rerum!</p>
    `;
    playerContainer.appendChild(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'blue';
    // })
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.background = 'yellow';
    }
    else {
        event.target.parentNode.style.background = 'yellow';
    }
})