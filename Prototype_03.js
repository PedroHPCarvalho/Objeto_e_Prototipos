function Produto(nome, preco)
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

/////////////////////////////////////////////////

function Camiseta(nome,preco,cor)
{
    Produto.call(this, nome , preco)
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata',14,'preta')

Camiseta.prototype.aumento = function(precentual){
    this.preco = this.preco + (this.preco*(precentual/100))
}
/////////////////////////////////////////////////

function Caneca(nome,preco,material,estoque)
{
    Produto.call(this,nome,preco)
    this.material = material

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError ('Type Error');
            }
            estoque = valor;

        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Azul',15,'Porcelana',15)
console.log(caneca)

Caneca.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual/100))
}

caneca.aumento(100);
console.log(caneca)

caneca.estoque = 800;
console.log(caneca)




