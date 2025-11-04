interface Character {
    name: string;
    hp: number;
    attack?: number;
    damage: number;
    isAlive(): boolean;
    power: string;
    attackTarget(target: Character): void;
    damageTaken(amount: number): void;
}

class Player implements Character {
    constructor(
        public name: string,
        public hp: number,
        public power: string,
        public damage: number
    ) {}
    isAlive(): boolean {
        return this.hp > 0;
    }
    attackTarget(target: Character): void {
        target.damageTaken(this.damage);
    }
    damageTaken(amount: number): void {
        this.hp -= amount;
    }
}
function battle(player1: Player, player2: Player): void {
    while (player1.isAlive() && player2.isAlive()) {
        player1.attackTarget(player2);
    }
}

const playerOne = new Player("WaterAvatar", 100, "Freeze", 15,);
const playerTwo = new Player("FireAvatar", 100, "Fireball", 15,);

console.log(`Character: ${playerOne.name}, HP: ${playerOne.hp}, Power: ${playerOne.power}, Damage: ${playerOne.damage}, Alive: ${playerOne.isAlive}`);