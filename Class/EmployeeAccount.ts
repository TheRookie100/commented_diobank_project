import { DioAccount } from "./DioAccount"

export class EmployeeAccount extends DioAccount {
    amountBonus: number


    constructor (amountBonus: number , name: string, accountNumber: number) {
        super(name, accountNumber)
        this.amountBonus = amountBonus
    }
    
    
    deposit_emplo(amountBonus: number): void {
        this.amountBonus = amountBonus + 10
    }   
        
}