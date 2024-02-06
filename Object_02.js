// defineProperty - defineProperties

function Product(name,price,qtd) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'qtd',{
        enumerable: true, // mostra a chave
        value: qtd, //valor da chave
        writable: false, // pode alterar o valor
        configurable: true // pode apagar, editar ou reconfig
    });

    Object.defineProperties(this, {
        name:{
            enumerable: true, // mostra a chave
            value: qtd, //valor da chave
            writable: true, // pode alterar o valor
            configurable: true // pode apagar, editar ou reconfig
        },
        price:{
            enumerable: true, // mostra a chave
            value: qtd, //valor da chave
            writable: true, // pode alterar o valor
            configurable: true // pode apagar, editar ou reconfig
        }
    })
}

const pd1 = new Product('Camiseta' , 20 , 3);
console.log(pd1);

for (let chave in pd1) {
    console.log(chave);
}