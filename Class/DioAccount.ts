//  ⬇ ← ← ← ← ← ← Aqui usamos esse operador "export" por que estamos dividindo as classes em 3 arquvios que  DioAccount, PeopleAccount , CompanyAccount
//  ⬇
//  ⬇      * Classe abstratas Mae - Vai servi de modelo para outras classes, porem essa classe mae nao pode ser utilizada ou instanciadas */
//  ⬇        ⬇
//  ⬇        ⬇
//  ⬇        ⬇
//  ⬇        ⬇
export abstract class DioAccount {
  // Aqui e uma classe abstrata e usamos o operador "abstract" . Nesse caso nao podemos criar um objeto ou iniciar de uma classe abstrata, a propria IDE ja informa que Não é possível  criar uma instância de uma classe abstrata
  // Esse é um erro comum que ocorre em programação orientada a objetos quando se tenta criar um objeto de uma classe abstrata. As classes abstratas são classes que não podem ser instanciadas diretamente, pois são incompletas e possuem métodos abstratos que devem ser implementados pelas classes filhas. Quando se tenta criar uma instância de uma classe abstrata, o compilador emite o erro "Cannot create an instance of an abstract class". Para corrigir esse erro, é necessário criar uma classe filha que implemente todos os métodos abstratos da classe abstrata.

  private name: string; // Aqui colocamos o atributo private e toda vez que precisa modificar preciso criar uma funcao dentro da class mae exemplos seria "setName"
  private readonly accountNumber: number; // Nesse caso usamos o operador " readonly" para somente fazer a leitura da atributo, toda vez que acessar vai esta somente em modo de leitura
  balance: number = 0;
  private status: boolean = true; // ou false ← ← Aqui vamos colocar esse atributo para criar um metodo private(privado) ou public(publico) que vamos construir na classe mae e vamos inciar esse atributo com "true". Exemplo de metodo (set e get)

  //⬇ Construtor
  constructor(name: string, accountNumber: number) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.balance = 250;
  }

  // Nesse caso usamos "setname" para alterar o valor ja que atributo esta "private name" nesse caso nao consigo chamar alteracao no objeto se nao tiver essa funcao, no primeiro objeto setamos um valor, porem se queremos alterar e o atributo estiver "private" a gnt nao consegue fazer isso direto no objeto sem colocar essa funcao abaixo aqui estamos dizendo para atributo alterar o valor.
  //      ⬇
  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso");
  };
  //      ↑
  //      ↑
  // Aqui estamos chamando a funcao na classe mae e pedido para alterar o valor, saindo de "Jorge Lucas" para "Guilherme Pablo" nesse caso como a private o atributo precisamos fazer esse processo, toda vez que precisamos mudar um valor do atributo que esteja no "modo private" precisamos criar uma funcao na class mae para poder alterar o valor quando for criado uma novo objeto;

  // Esse getName e para pegar ou imprimir somente o novo valor que foi inserido no atributo, exemplo criamos o "setName" para mudar o valor do meu atributo "name" saindo de "Jorge Lucas" para "Guilherme Pablo Rezende" porem so quero imprimir essa nova informacao que meu atributo "name" esta recebendo, entao toda vez que precisa alterar o valor de atributo e uso "set" e toda vez precisar imprimir o novo valor desse atributo que o meu objeto esta usando e uso "get";
  //   ⬇
  //   ⬇
  getName = (): string => {
    return this.name;
  };

  //
  /*
            setAccountNumber = () => { // Aqui e uma funcao para alterar o valor do atributo accountNumber, mas como esse atributo esta no modolo leitura nao conseguimos alterar esse valor, a funcao foi comentada por que ela gera erro, e erro justamente nao conseguir alterar um atributo que esta "private readonly"
                this.accountNumber = 23
            }
            */
  //               ⬇ ← ← ← Aqui quer dizer que esse metodo vai retorna vazio(void) | assinatura do metodo
  deposit = (): void => {
    if (this.validateStatus()) {
      // Aqui estamos chamando uma funcao dentro de outra funcao. Exemplo precisamos depositar porem precisamos tbm verificar se a conta esta ativa, entao a nossa funcao deposit    vai verificar usando "If e nossa metodo que e validateStatus" se conta e verdadeira se for o console.log abaixo impri que foi depositado o valor;
      // Aqui simulamos caso a conta do cliente seja invalida, quer dizer vamos ter metodo depositar com uma validacao de status que foi criado com outra funcao.. A funcao deposit vai verificar na funcao validacao se a conta e verdadeira se foi verdadeira informa que valor foi depositado corretamente, caso ao contrario vai estorar o erro conta invalida
    }

    console.log("Voce depositou um valor"); // ➡ Metodo parecido com a classe filha CompanyAccount.. "Polimorfismo na classe filha"
  };

  /*            Desafio 1 - Exercio 1
        //              ⬇ valor a ser depositado
        deposit_ = (amount:number): void => {
            if(this.validateStatus() && amount >0){ // verficar a codicao da conta se esta ativa e valor depositado e maior que zero
            console.log("Voce depositou um valor na sua conta!" , + amount)
      
            this.balance = amount
            console.log("Seu saldo atual" , amount);
        } 
    }
 
        withdraw_ = (amount: number): void => {
        if(this.validateStatus() && this.balance >= amount) {
            console.log("Você sacou um valor na sua conta!", amount );
            this.balance -= amount;
            console.log("Seu saldo atual");
        }
    }   

        */

  //               ⬇ ← ← ← Aqui quer dizer que esse metodo vai retorna vazio(void) | assinatura do metodo
  withdraw = (): void => {
    console.log("Voce sacou um valor");
  };
  //               ⬇ ← ← ← Aqui quer dizer que esse metodo vai retorna vazio(void) | assinatura do metodo
  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    // Aqui criamos um metodo de validacao, nesse caso o "if" e uma codicao que quer dizer... Se for verdadeiro(true) o valor imprimir a informacao true, como ja setamos no atributo para iniciar como true ele mesmo pode ser mostrado como "this.status". "Exemplo: status: boolean = true" e caso ao contrario se for falso(false) vai ter o returno de outra forma que nesse caso e " throw new Error() ← caso precisa mostar erro " podemos dizer de forma generica que vai "estorar um erro caso nao for verdadeiro";
    // Como a gnt colocou o private esse processo vai acontecer internamente na conta mae, e motivo por que toda vez que fazer um deposito vai verificar interno sem mostra essa informacao que a conta esta ativa, entao toda vez que eu criar uma conta internamente usando esse metodo vamos verificar se a conta esta validada ou nao.
    if (this.status) {
      return this.status;
    }
    // Aqui simulamos caso a conta do cliente seja invalida, quer dizer vamos ter metodo depositar com uma validacao de status que foi criado com outra funcao.. A funcao deposit vai verificar na funcado validacao se a conta e verdadeira se foi verdadeira informa que valor foi depositado corretamente, caso ao contrario vai estorar o erro conta invalida
    throw new Error("Conta invalida!");
  };
}

// Objetos ➡ App.ts
// Class Mae ➡ DioAccount.ts
// Class filha ➡ PeopleAccount.ts
// Class filha ➡ CompanyAccount.ts

// O que assinatura do metodo: e tipo de retorno que vai trazer;
