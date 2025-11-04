import * as readline from 'readline';

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> { 
    return new Promise(resolve => rl.question(query, resolve));
}

async function battle(player1: Character, player2: Character): Promise<void> {

    const choice = await askQuestion('Choose your character WaterAvatar or FireAvatar (w/f): ')
    while (player1.isAlive() && player2.isAlive()) {
        if (choice.toLowerCase() == 'w') {
            playerOne.attackTarget(playerTwo);
        } else if (choice.toLowerCase() == 'f') {
            playerTwo.attackTarget(playerOne)
        }
    }
}

const playerOne = new Player("WaterAvatar", 100, "Freeze", 15,);
const playerTwo = new Player("FireAvatar", 100, "Fireball", 15,);

console.log(`Character: ${playerOne.name}, HP: ${playerOne.hp}, Power: ${playerOne.power}, Damage: ${playerOne.damage}, Alive: ${playerOne.isAlive}`);