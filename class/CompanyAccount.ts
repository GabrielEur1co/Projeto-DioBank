import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    

    constructor(name: string, accountNumber:number){
        super(name, accountNumber)
        
        
    }

    getLogan = ():void => {
        if(this.validateStatus())
            
            this.setBalance(this.getBalance() +1000)
            console.log("Emprestimo realizado com sucess0!")
        

    } 

           

    deposit = (newbalance: number):void => {
    if(this.validateStatus()){
        newbalance = (newbalance + this.getBalance())
        this.setBalance(newbalance)
        console.log('A empresa depositou')
    }
       
    
    }
    
}