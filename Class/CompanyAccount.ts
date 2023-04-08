import { DioAccount } from "./DioAccount" // Como criamos uma "repositorio Class" precisamos usar esse comando para importa as informacoes esta no "repositorio Class"
// Optamos em dividir a classes   DioAccount, PeopleAccount , CompanyAccount cada classe vai ter seu proprio repositorio/arquvivo para facilitar a manuntecao

export class CompanyAccount extends DioAccount{ // ➡ Modelo de heranca - classe filha


    constructor (name: string , accountNumber: number){
        super(name, accountNumber) // Super construtor e resposanvel de inicializar a classe que estamos estendendo
    }
    //               ⬇ ← ← ← Aqui quer dizer que esse metodo vai retorna vazio | assinatura do metodo
    //               ⬇
    getLoan = () : void =>{ // Esse metodo|funcao quer dizer  que nosso usuarios do tipo "companyAccount" vai poder fazer emprestimo
        console.log ("Voce pegou um emprestimo")
    }

    // Polimorfismo
    //  ⬇
    //  ⬇
    //  ⬇ ← ← ← Esse mesmo metodo|funcao tem na classe mae(abstrata) so que o valor do retorno e outro, entao aqui podemos dizer que polimorfismo.. entao toda vez que a conta CompanyAccount for criada traz essa informacao da classe filha e nao da mae. A outra classe mantem a informacao da classe mae.
    //  ⬇
    //  ⬇
    //  ⬇
    //  ⬇
    deposit = (): number => { // Aqui mudamos a assintatura do metodo na classe filha, na classe filha tem retorno, ja na classe mae nao tem retorno e valor e void(quer dizer vazio nao tem retorno somente mostra na tela informacao) classe mae - DioAccount classe filha CompanyAccount
       return 2
    }
}

    // Objetos ➡ App.ts
    // Class Mae ➡ DioAccount.ts
    // Class filha ➡ PeopleAccount.ts 
    // Class filha ➡ CompanyAccount.ts