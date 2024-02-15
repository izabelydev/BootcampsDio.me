//----------------------DECORATORS----------------------
/* 
    Antes, você precisa habilidar no tsconfig.json:
        "experimentalDecorators": true, // Enable experimental support for legacy experimental decorators.
*/

function exibirNome(target:any) {
    console.log(target);
}

//decorar nome do método: gatilho antes da classe para disparar a function exibirNome
@exibirNome
class Funcionario {}

@exibirNome
class Quincas {}

// Resumo: você cria um método e coloca um gatilho para executar uma ação


//----------------------CLASS DECORATORS----------------------
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __nameApi: "Pokédex"}) // anderline anderline é para deixar a propriedade privada
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(`Versão da API ${api.__nameApi}: ${api.__version}`);

//----------------------ATTRIBUTE DECORATORS----------------------
function miniLength(length: number) {
    return (target:any, key:string) => {
        let _value = target[key];

        const getter = () => "[play] " + _value;
        const setter = (value:string) => {
            if(value.length < length) {
                throw new Error(`Nome da API menor que ${length} caracteres`)
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

class Api2 {
    @miniLength(3)
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

const api2 = new Api2("banco de dados");
console.log(api2.name);



