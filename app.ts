/*import { DioAccount } from './Class/DioAccount' // Como criamos uma "repositorio Class" precisamos usar esse comando para importa as informacoes de class que esta no "repositorio Class"
import { PeopleAccount } from './Class/PeopleAccount'
// Optamos em dividir a classes   DioAccount, PeopleAccount , CompanyAccount cada classe vai ter seu proprio repositorio/arquvivo para facilitar a manuntecao
import { CompanyAccount } from './Class/CompanyAccount'
// Optamos em dividir a classes   DioAccount, PeopleAccount , CompanyAccount cada classe vai ter seu proprio repositorio/arquvivo para facilitar a manuntecao
//   ↑
//   ↑
//   ↑
//   ↑← ← ← ← ← Operador para importar as informacoes de cada arquivo das classes

*/
/*
// Aqui simulamos caso a conta do cliente seja invalida, quer dizer vamos ter metodo depositar com uma validacao de status que foi criado com outra funcao.. A funcao deposit vai verificar na funcado validacao se a conta e verdadeira se foi verdadeira informa que valor foi depositado corretamente, caso ao contrario vai estorar o erro conta invalida
//    Objetos
//      ⬇
//      ⬇
//      ⬇
// const peopleAccount: PeopleAccount = new PeopleAccount (1, "Jorge Luccas" , 10)
// console.log (peopleAccount)
// peopleAccount.deposit()
const companyAccount1: CompanyAccount = new CompanyAccount("Pedro" , 10)
console.log(companyAccount1)

//console.log(companyAccount1.accountNumber) // Aqui estamos usando o operdor " readnoly" no atributo da classe mae "accountNumber"


/*
// Aqui estamos mudando os valores do atributo usando o set e get
peopleAccount.setName("Guilherme Rezende") // Aqui estamos chamando a funcao na classe mae e pedido para alterar o valor, saindo de "Jorge Lucas" para "Guilherme Pablo" nesse caso como a private no atributo name precisamos usar "setName", toda vez que precisamos mudar o valor do atributo que esteja no "modo private" precisamos criar uma funcao na classe mae para poder alterar o valor quando for criado uma novo objeto;
console.log (peopleAccount)

console.log (peopleAccount.getName()) // Aqui estamos chamando o novo valor que foi alterado
// Exemplo:
// Usamos o "set" para alterar o valor de Jorge para Guilherme
// e usamos o "get" para imprimir ou pegar esse novo valor que e 
// Guilherme




// Aqui vamos imprimir somente a informacao name
// peopleAccount.deposit()
//console.log (peopleAccount.name) // Aqui estamos pedido para imprimir o valor que passamos para o objeto acima a informacao "Jorge Luccas", estamos passando somente o "name"




//   Objetos
//     ⬇
//     ⬇
//     ⬇
//peopleAccount.name = "Guilherme Pablo Rezende" // ➡ Aqui estamos passando uma novo valor para o atributo name dentro da "classe mae" quando eu chamar esse objeto vai apresentar a informacao a nova que e  "Guilherme Pablo Rezende"

// console.log(peopleAccount.name) // Imprimir novo valor "Guilherme Pablo Rezende"


//
    
    //   Objetos
    //     ⬇
    //     ⬇
    //     ⬇
    //  const companyAccount1: CompanyAccount = new CompanyAccount("Pedro" , 10)
    //  companyAccount1.deposit()


    // const companyAccount1: CompanyAccount = new CompanyAccount("Pedro" , 10)
    // console.log(companyAccount1.deposit())*/


    // Objetos ➡ App.ts
    // Class Mae ➡ DioAccount.ts
    // Class filha ➡ PeopleAccount.ts 
    // Class filha ➡ CompanyAccount.tsya



//





/*

// Pai
abstract class Apps { // DioAccount.ts
  private name: string
  private readonly accountNumber: number // privado somente leitura
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
//          arrow function | parametro      
  public setName = (name: string): void => { // = "setName = (name: string): void => { }"
    this.name = name
    console.log('Nome alterado com sucesso!')
  }
}

//Filho
class PeopleAccount extends Apps { // PeopleAccount.ts
  doc_id: number // exemplo: cpf

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}

//Objeto
const peopleAccount: PeopleAccount = new PeopleAccount (1, "Pedro Lucas" , 10)
console.log (peopleAccount)
peopleAccount.setName("Guilherme Rezende") // atribuido um novo valor no objeto usando set na classe pai abstrata
console.log (peopleAccount)



*/






























































































/*
abstract class DioAccount {
    name: string | undefined
    accountNumber: number | undefined
    balence: number = 0

    constructor (name: string , accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balence = 3000
    }

    deposit = (): void => {
        console.log("Voce depositou um valor na sua conta!")
    }

    withdraw = (): void => {
        console.log ("Voce sacou um valor na sua conta!")
    }

    getBalence = (): number => {
        return 200
    }
}

class PeopleAccount extends DioAccount {
    doc_id: number | undefined

    constructor (doc_id: number , name: string , accountNumber: number){
        super(name , accountNumber)
        this.doc_id = this.doc_id
    }

}


class CompanyAccount extends DioAccount {


    constructor (name: string , accountNumber: number) {
        super(name , accountNumber)


    }

    getLoan = (): void => {
        console.log ("Voce pegou um emprestimo na sua conta")

    }

    deposit = (): number =>{
        return 10000
    }
    
}


const peopleAccount: PeopleAccount = new PeopleAccount (1 , "Pedro Luccas" , 5569)
peopleAccount.deposit ()

const companyAccount3: CompanyAccount = new CompanyAccount ("Joao" ,  10)
console.log (companyAccount3.deposit())
*/
/*
const peopleAccount10: PeopleAccount = new PeopleAccount (1, "Jorge Luccas" , 10)
peopleAccount.deposit()

const companyAccount1: CompanyAccount = new CompanyAccount("Pedro" , 10)
console.log(companyAccount1.deposit())*/








/*
abstract class DioAccount {
    nome: string | undefined
    account: number | undefined
    balence: number = 0
    constructor (nome: string , account: number) {
        this.nome = nome
        this.account = account
        this.balence = 2000
    }

    deposit = (): void => {
        console.log ("Voce depositou um valor")
    }

    whitdraw = (): void => {
        console.log ("Voce sacou um valor")
    }

    getbalence = (): void => {
        console.log (this.balence)
    }
}


class PeopleAccount extends DioAccount {
    doc_id: number | undefined

    constructor (doc_id: number , name: string , account: number){
        super(name, account) //  a gnt nao colocar no super construtor por que atributo ja esta declarado na classe filha 
        this.doc_id = this.doc_id
    }
}

class CompanyAccount extends DioAccount {


    constructor(name: string , acoountNumber: number){
        super(name, acoountNumber);

    }

    getLoan = ():void => {
        console.log ("Voce pegou um emprestimo")

    }
    deposit = (): number => {
        return 100000
    }

}
    


const peopleAccount: PeopleAccount = new PeopleAccount (1 , "Jorge Pedro" , 100)
peopleAccount.deposit()

const companyAccount2: CompanyAccount = new CompanyAccount ("Lucas" , 236)
console.log (companyAccount2)


*/






/*
abstract class DioAccount {
    name: string | undefined
    accountNumber: number | undefined
    balence: number = 0

    constructor (name: string , accounterNumber: number){
        this.name = name 
        this.accountNumber = accounterNumber
        this.balence = 20
    }


    deposit = (): void => {
        console.log ("Voce depositou um valor na sua conta bancaria!")
    }

    withdraw = (): void => {
        console.log ("Voce sacou um valor na sua conta bancaria!")
    }

    getBalence = (): number => {
        return 1000
    }

}

class PeopleAccount extends DioAccount{
    doc_id: number | undefined

    constructor (doc_id: number , name: string , accountNumber: number){
        super(name, accountNumber)
        this.doc_id = this.doc_id
    }


}

class CompanyAccount extends DioAccount {


    constructor (name: string , accountNumber: number) {
        super(name , accountNumber)
    }

    getLoan = (): void => {
        console.log ("Voce pegou um emprestimo na sua conta bancaria")
    }


    deposit= (): number => {
        return 10000
    }
}


const peopleAccount11: PeopleAccount = new PeopleAccount (1 , "Pedro Lucass" , 10)
peopleAccount11.deposit ()

const companyAccount4: CompanyAccount = new CompanyAccount (" Pedro Jorge" , 55896234)
console.log (companyAccount4.deposit())

*/












/*
abstract class DioAccount {
    private number: string | undefined
    private accountNumber: number | undefined
    private balence: number = 0

    constructor (name: string , accountNumber: number  ){
        this.number = name
        this.accountNumber = accountNumber
        this.balence = 260

    }

    deposit = (): void => {
        console.log ("Voce depositou um valor na sua conta bancaria na cidade de Lavras, Minas Gerais.")
    }

    withdraw = (): void => {
        console.log ("Voce sacou um valor na sia conta bancaria na cidade de Lavras, Minas Gerais.")
    }


    getbalence = (): number => {
        return 60100
    }
    
}

class PeopleAccount extends DioAccount {
    doc_id: number | undefined

    constructor (doc_id: number , name: string , accountNumber: number){
        super(name , accountNumber)
        this.doc_id = this.doc_id
    }

}


class CompanyAccount extends DioAccount {

    constructor (name: string , accountNumber: number){
        super(name , accountNumber)
    }

    getLoan = (): void =>{
        console.log ("Voce pegou um emprestimo na conta bancaria na cidade Lavras, Minas Gerais.")
    }

    deposit = (): number => {
        return 20000
    }
}

const peopleAccount12: PeopleAccount = new PeopleAccount (25 , "Alex" , 225)
peopleAccount12.deposit()

const companyAccount5: CompanyAccount = new CompanyAccount ("Guilherme" ,  10)
console.log(companyAccount5.deposit())
*/









/*
abstract class DioAccount {
    private name: string | undefined
    private accountnumber: number | undefined
    private balence: number = 0

    constructor (name: string , accountNumber: number){
        this.name = name
        this.accountnumber = accountNumber
        this.balence = 257
    }

    deposit = (): void => {
        console.log ("Voce depositou um valor na sua conta bancaria na cidade de Varginha, Minas Gerais.")
    }

    withdraw = (): void => {
        console.log ("Voce sacou um valor na sua conta bancaria na cidade de Varginha, Minas Gerais.")
    }

    getbalence = (): number =>{
        return 80000
    }
}



class PeopleAccount extends DioAccount {
    doc_id: number | undefined

    constructor (doc_id: number , name: string , accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id
    }
}



class CompanyAccount extends DioAccount {


    constructor (name: string , accountNumber: number) {
        super(name, accountNumber)
    }

    getloan = (): void => {
        console.log ("Voce pegou um emprestimo na sua conta bancaria em Varginha, Minas Gerais.")
    }

    deposit = (): number =>{
        return 70000
    }

}


const peopleAccount13: PeopleAccount = new PeopleAccount (1 , "Amelia" , 10)
peopleAccount13.deposit()

const companyAccount6: CompanyAccount = new CompanyAccount ("Mauricio" , 669633)
console.log(companyAccount6.deposit())
*/








/*
abstract class DioAccount {
    name: string | undefined
    accountNumber: number | undefined
    balence: number = 0


    constructor(name: string , accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balence = 320
    }


    deposit = (): void =>{
        console.log ("Voce depositou um valor na sua conta bancaria na cidade de Passos, Minas Gerais.")
    }


    withdraw = (): void =>{
        console.log ("Voce sacou um valor na sua conta bancaria na cidade de Passos, Minas Gerais.")
    }

    getbalence = (): number => {
        return 10000
    }
}


class PeopleAccount extends DioAccount {
    doc_id: number | undefined


    constructor (doc_id: number , name: string , accountNumber: number) {
        super(name , accountNumber)
        this.doc_id = doc_id
    }
 
}


class CompanyAccount extends DioAccount {


    constructor (name: string , accountNumber: number) {
        super(name, accountNumber)
        
    }

    getloan = (): void =>{
        console.log ("Voce pegou um emprestimo na cidade de Passos, Minas Gerais.")
    }

    deposit = (): number => {
        return 60900
    }
}


const peopleAccount14: PeopleAccount = new PeopleAccount (63 , "Everton" , 558963)
peopleAccount14.deposit ()

const companyAccount7: CompanyAccount = new CompanyAccount ("Patrick" , 6639)
console.log(companyAccount7.deposit())

*/