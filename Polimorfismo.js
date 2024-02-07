/* Conta raiz, neste caso é a super classe, a conta que possui todos os recusos em comum 
de todas as outras contas
*/
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo ) {
        console.log(`Saldo Insuficiente: ${this.saldo} `)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta}   ` + 
                `Saldo: R$${this.saldo.toFixed(2)}`
    );
};
//////////////////////////////////////////////
/* Conta Corrente, é uma classe filha que possui a diferença de possuir limite (a conta pode negativar)
*/
function ContaC(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaC.prototype = Object.create(Conta.prototype);
ContaC.prototype.constructor = ContaC;

ContaC.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo Insuficiente: ${this.saldo} 
                    Limite da Conta: ${this.limite}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

//////////////////////////////////////////////////////
/* Identica a conta pai */
function ContaP(agencia,conta,saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP;
///////////////////////////////////////////////////

const contap = new ContaP(12,11,600);
const contac = new ContaC(11,22,10,100);

contap.depositar(155);
contap.sacar(756);

console.log('\n');

contac.depositar(100);
contac.sacar(250)