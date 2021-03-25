var prompt = require("prompt");
prompt.start();
var readline = require('readline-sync');

class Player {
  constructor(name, life, xp, level) {
    this.name = name;
    this.life = life;
    this.xp = xp;
    this.level = level;
  }
}
    name = readline.question("Quel est votre pseudo ? \n")
    const player1 = new Player(name, 10, 100, 50);
    console.log("🚀 ~ file: app.js ~ line 14 ~ player1", player1)



// toto
