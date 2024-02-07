const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Ana'},
    { id: 1, nome: 'Rodrigo'}
];

/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id }  = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
console.log(novasPessoas.get(3));