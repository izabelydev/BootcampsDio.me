// -----------------INTERFACES-----------------
// (types x interfaces)

//type - + usado para tipar um objeto
type robot = {
    readonly id: number | string;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "megaman"
}

//interface - + usado quando trabalhamos com classes
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1);
console.log(bot2);



/* 
Quando usar interface:
    Estrutura do objeto: type
    Tipar classes: interface 
*/
class Pessoa implements robot2 {
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i'm ${this.name}, my id is ${this.id}`;
    }
}

const p = new Pessoa(2, "gutsman");
console.log(p.sayHello())


// -----------------CLASSES-----------------
// É como uma forma para você criar várias coisas que vão ter os mesmos atributos

class Character {
    name?: string; // o ponto de interrogação faz o atributo ser opcional (você pode inserir dentro da classe ou não)
    stregth: number;
    skill: number;

    constructor(/* name:string, */ stregth: number, skill: number) {
        // this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character(10, 190);
p1.attack();



// DATA MODIFIERS - Quem pode acessar determinados dados da classe (tipos: public, private, protected, readonly)


class Character2 {
    // private, a propriedade só pode ser acessada dentro da classe
    private name: string;
    //public, a propriedade pode ser acessada dentro ou fora da classe
    public stregth: number;
    //protected, a propriedade só pode ser acessada dentro da classe e subclasses
    protected skill: number;

    constructor(name:string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    // Os métodos também podem ser definidos como public, private ou protected
    protected attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p2 = new Character2("Ryu", 10, 190);
// p2.attack(); (deu erro porque o método é do tipo protected)


// -----------------SUBCLASSES-----------------
//Character2: superclass (pai)
//Magician: subclass (filha)
class Magician extends Character2 {
    magicPoints: number;
    constructor(
        name:string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
    ) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p3 = new Magician("Mago", 9, 35, 100);