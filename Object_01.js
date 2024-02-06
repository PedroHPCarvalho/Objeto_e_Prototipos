const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Carvalho'
};

console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
/////////////////////////////

const pessoa1 = new Object();
pessoa1.nome = 'Jonas';
pessoa1.sobrenome = 'Luiz'

console.log(pessoa1);

///////////////////////////////


const pessoa2 = new Object();
pessoa2.nome = 'Jonas';
pessoa2.sobrenome = 'Luiz'

delete pessoa2.nome;
console.log(pessoa2);

/////////////////////////////////

const pessoa3 = new Object();
pessoa3.nome = 'Jonas';
pessoa3.sobrenome = 'Luiz'
pessoa3.falarNome = function() {
    console.log(`${this.nome} esta falaando seu nome`)
};

pessoa3.falarNome();

/////////////////////////////////

const pessoa4 = new Object();
pessoa4.nome = 'Jonas';
pessoa4.idade = 80
pessoa4.sobrenome = 'Luiz'
pessoa4.falarNome = function() {
    console.log(`${this.nome} esta falaando seu nome`)
};
pessoa4.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};

console.log(pessoa4.getDataNascimento());
///////////////////////

for (let chave in pessoa4) {
    console.log(chave);
}

/////////////////////////////

for (let chave in pessoa4) {
    console.log(pessoa4[chave]);
}