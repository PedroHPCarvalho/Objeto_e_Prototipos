const produto = {nome: 'Caneca' , preco: 1.99}

const OutraCoisa = produto;

const OutraCoisa2 = {...produto,
material: 'Porcelana'
};
///////////////////////////////

const caneca = Object.assign({}, produto, { material : 'porcenala azul'})

//////////////////////////////////////////////
console.log(OutraCoisa);
produto.nome = 'Arroz'
console.log(produto);
OutraCoisa.nome = 'Arroz'
console.log(produto);

console.log(OutraCoisa2);
console.log(caneca);

/////////////////////////////////

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))

Object.defineProperty(produto, 'nome',{
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))

///////////////////////////////

console.log(Object.values(produto));
console.log(Object.keys(produto));
console.log(Object.entries(produto));
;
