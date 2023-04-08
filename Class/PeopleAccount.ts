import { DioAccount } from "./DioAccount" // Como criamos uma "repositorio Class" precisamos usar esse comando para importa as informacoes esta no "repositorio Class"
// Optamos em dividir a classes   DioAccount, PeopleAccount , CompanyAccount cada classe vai ter seu proprio repositorio/arquvivo para facilitar a manuntecao

export class PeopleAccount extends DioAccount{ // ➡ Modelo de heranca - classe filha
    doc_id: number | undefined
    set: any
    // doc_id ➡ numero do cpf exemplo:

    constructor (doc_id: number, name: string , accountNumber: number){
        super(name , accountNumber) // Super construtor vai definir os valores da nossa classe PeopleAccount por que ela vai herda esse valores/propriedades da nossa classe abstrata que e "DioAccount"
        this.doc_id = doc_id
    } 

}

    // Objetos ➡ App.ts
    // Class Mae ➡ DioAccount.ts
    // Class filha ➡ PeopleAccount.ts 
    // Class filha ➡ CompanyAccount.ts
