"use strict";
// -----------------INTERFACES-----------------
// (types x interfaces)
const bot1 = {
    id: 1,
    name: "megaman"
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
/*
Quando usar interface:
    Estrutura do objeto: type
    Tipar classes: interface
*/
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}, my id is ${this.id}`;
    }
}
const p = new Pessoa(2, "gutsman");
console.log(p.sayHello());
// -----------------CLASSES-----------------
// É como uma forma para você criar coisas que vão ter os mesmos atributos
class Character {
    constructor(/* name:string, */ stregth, skill) {
        // this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 190);
p1.attack();
