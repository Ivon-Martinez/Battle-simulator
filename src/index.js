var Person = /** @class */ (function () {
    function Person(name, hp, power, damage) {
        this.name = name;
        this.hp = hp;
        this.power = power;
        this.damage = damage;
    }
    Object.defineProperty(Person.prototype, "isAlive", {
        get: function () {
            return this.hp > 0;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var per = new Person("WaterAvatar", 100, "Water", 15);
console.log("Character: ".concat(per.name, ", HP: ").concat(per.hp, ", Power: ").concat(per.power, ", Damage: ").concat(per.damage, ", Alive: ").concat(per.isAlive));
