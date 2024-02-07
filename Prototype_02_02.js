function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(precentual) {
    this.preco = this.preco - (this.preco * (precentual/100))
}

Produto.prototype.aumento = function(precentual) {
    this.preco = this.preco + (this.preco * (precentual/100))
}

///////////////////////////

const p1 = new Produto('Camiseta',50)
p1.desconto(100);
console.log(p1.preco)

const p2 = {
    nome: 'Caneca',
    preco: 15
};

/////////////////////////////////

Object.setPrototypeOf(p2, Produto.prototype)

console.log(p2);
p2.aumento(10);
console.log(p2);


///////////////////////////////////

const p3 = Object.create(Produto.prototype,
    {
        nome: {
         writable: true,
         configurable: true,
         enumerable: true,
         value: 'Arroz'
        },
       preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 54
       },
       tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 54
       }  
    });

console.log(p3)
p3.aumento(70);
console.log(p3)

