function Product(name,price,qtd) {
    this.name = name;
    this.price = price;

    let qtdPrivado = qtd;
    Object.defineProperty(this, 'qtd',{
        enumerable: true, // mostra a chave
        configurable: true, // pode apagar, editar ou reconfig
        get: function(){
            return qtdPrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number')
            {
                throw new TypeError ('Type Error');
            }
            qtdPrivado = valor
        }
    });
}

const pd1 = new Product('Camiseta' , 20 , 30);
pd1.qtd = 'varios produtos'
pd1.qtd = 500
console.log(pd1.qtd);