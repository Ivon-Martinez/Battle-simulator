"use strict";
class Player {
    constructor(name, hp, power, damage) {
        this.name = name;
        this.hp = hp;
        this.power = power;
        this.damage = damage;
    }
    isAlive() {
        return this.hp > 0;
    }
    attackTarget(target) {
        target.damageTaken(this.damage);
    }
    damageTaken(amount) {
        this.hp -= amount;
    }
}
function battle(player1, player2) {
    while (player1.isAlive() && player2.isAlive()) {
        player1.attackTarget(player2);
    }
}
const playerOne = new Player("WaterAvatar", 100, "Freeze", 15);
const playerTwo = new Player("FireAvatar", 100, "Fireball", 15);
console.log(`Character: ${playerOne.name}, HP: ${playerOne.hp}, Power: ${playerOne.power}, Damage: ${playerOne.damage}, Alive: ${playerOne.isAlive}`);
