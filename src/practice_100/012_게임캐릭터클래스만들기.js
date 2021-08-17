const Wizard = class Wizard {
    constructor(h, m, a) {
        this.health = h;
        this.mana = m;
        this.armor = a;
    }

    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();