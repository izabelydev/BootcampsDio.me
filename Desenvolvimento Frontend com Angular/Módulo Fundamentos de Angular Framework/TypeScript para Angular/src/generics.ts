//-------------------GENERICS-------------------

//função para juntar vários arrays
//os 3 pontinhos significa que está espalhando uma qunatidade indeterminada de itens
// <T> definir o tipo
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

// Aqui você define o <T>
const numArray = concatArray <number[]> ([1.5], [3]);
const stgArray = concatArray <string[]> (["iza"], ["joao", "marcos"]);

console.log(numArray);
console.log(stgArray);

