import * as readline from 'readline';

interface Character {
    name: string;
    hp: number;
    power: string;
    attack: number;
    isAlive(): boolean;
    attackTarget(target: Character): void;
    damageTaken(amount: number): void;
}

class Player implements Character {
    name: string;
    hp: number;
    power: string;
    attack: number;
    constructor(name:string, hp:number, power:string, attack:number) {
        this.name = name;
        this.hp = hp;
        this.power = power;
        this.attack = attack;
    }
    isAlive(): boolean {
        return this.hp > 0;
    }
    attackTarget(target: Character): void {
        console.log(`${this.name} attacks ${target.name}`)
        target.damageTaken(this.attack);
    }
    damageTaken(amount: number): void {
        const randomDamage = Math.floor(Math.random() * amount) + 1;
        this.hp -= randomDamage;
        console.log(`${this.name} takes ${randomDamage} damage, remaining HP: ${this.hp}`);
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

    const choice = await askQuestion('Choose your character WaterAvatar or FireAvatar (w/f): ');

    while (player1.isAlive() && player2.isAlive()) {
        console.log(`\n${player1.name} HP: ${player1.hp} | ${player2.name} HP: ${player2.hp}`);

        if (choice.toLowerCase() == 'w') {
            player1.attackTarget(player2);
            if (player2.isAlive()){
                player2.attackTarget(player1);
            }
        } else if (choice.toLowerCase() == 'f') {
            player2.attackTarget(player1);
            if (player1.isAlive()) {
                player1.attackTarget(player2)
            }
        } else {
            console.log('Invalid input. Please enter "a" to attack or "r" to run.');
        }
    }

    if (player1.isAlive() && !player2.isAlive()) {
        console.log(`${player1.name} wins!`);
    } else {
        console.log(`${player2.name} wins!`);
    } 

    rl.close();
}


const player1 = new Player("WaterAvatar", 100, "Freeze", 15,);
const player2 = new Player("FireAvatar", 100, "Fireball", 15,);

battle(player1, player2);

