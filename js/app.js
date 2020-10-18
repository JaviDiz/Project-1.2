import Game from "./Game.js"
import validateGameForm from "./form-validation.js"

let lGames = [];
let indexGame = 0;
let sort = true;

document.querySelector('#btn-addGame').addEventListener("click", addGame);

orderNames();


// Añadir juego

function addGame() {
    
    if (!validateGameForm()) return false;

    const even = (item) => item.name === document.querySelector("#game_name").value;
    if ( lGames.some( even) ) {
        alert ("Juego repetido");
    } else {
        let codiGame = ++indexGame;
        let aDate = document.querySelector("#game_release").value.split("-");
        let release = aDate[2] + "/" + aDate[1] + "/" + aDate[0];
        let oGame = new Game(codiGame,
            document.querySelector("#game_name").value,
            document.querySelector("#game_developer").value,
            release,
            document.querySelector("#game_pegi").value,
            document.querySelector("#game_gnre").value,
        );
        console.info("New game:" + oGame.toString());

        lGames.push(oGame);
        document.getElementById("frm-game").reset();
        populateTableGames(lGames);
    }
}


function populateTableGames(lGames) {
    let bodyGameList = document.getElementById("gamelist");
    bodyGameList.innerHTML = "";
    lGames.forEach((item) => {
        let oGame = item;
        let sGame = `<tr id="${oGame.ID}">
                        <td scope="row">${oGame.ID}</td>
                        <td>${oGame.name}</td>
                        <td>${oGame.developer}</td>
                        <td>${oGame.release}</td>
                        <td>${oGame.pegi}</td>
                        <td>${oGame.genre}</td>
                        <td><i class="fas fa-trash-alt delete" id="${oGame.ID}" style="color:red"></i></td>
                        </tr>`;
        bodyGameList.innerHTML += sGame;
    });
    setDeleteEvent();
}

function setDeleteEvent() {
    $("i.delete").on('click',(event) => {
        lGames = lGames.filter(game => game.ID != event.target.id);
        populateTableGames(lGames);
    });

    
};

function orderNames() {

    $("#orderButton").on('click', () => {
    
        if (sort) {
            sort = false;
            lGames.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        } else {
            sort = true;
            lGames.sort(function(a, b){
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            })
        }
    
        populateTableGames(lGames);
    });
        
}