class enemy {
    constructor(name, speed, healthPoint, attackPoint, isDead) {
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
    attack() {
        return this.attackPoint + 10;
        return this.healthPoint - 10;
        console.log(`${this.name} sedang menyerang`);
    }
    confused() {
        return this.healthPoint-100;
        return this.speed -100;
        console.log(`${this.name} sedang dalam kondisi bahaya`)
    }
};

class pocong extends enemy {
    constructor(name, speed, healthPoint, attackPoint, jump) {
     super (name, speed, healthPoint, attackPoint);
     this.jump = jump
    };
    attack() {
        super.attack();
        return  ` ${this.name} sedang menyerang, speed menjadi ${this.speed + 100}`;
    
    };
    jump() {
        return this.jump + 50;
        console.log(`${this.name} sedang loncat`);
    };
    superJump() {
        return this.jump + 100;
        return `${this.name} sedang loncat sangat tinggi`;
        
    }

}
let Enemy = new enemy('enemy', 10, 10, 0, false);
let Pocong = new pocong ('pocong', 0, 0, 0, 0);
console.log(Pocong.attack());
