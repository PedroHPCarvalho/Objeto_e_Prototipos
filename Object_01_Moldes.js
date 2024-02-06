//Factory Functions / Constructor Functions / Class
function criaPessoa(nome, sobrenome)
{
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa(`Pedro`,`Pereira`);
console.log(p1.nomeCompleto);
////////////////////////////////////////////////////

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// new cria um objeto vazio, pega a palavra this atrela a informação ao objeto

const p2 = new Pessoa('Luiz','Jonas');
console.log(p1);

////////////////////////////////////////////

const p3 =  new Pessoa('Pedro','Marcus');
Object.freeze(p3);
p3.nome = 'Robson';
console.log(p3)

////////////////////////////////////


