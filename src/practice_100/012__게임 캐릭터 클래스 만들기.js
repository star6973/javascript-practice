class Solution {
    constructor(h, m, a) {
        this.health = h;
        this.mana = m;
        this.armor = a;
    }

    attack() {
        console.log("파이어볼");
    }
}

exports.solution = Solution;