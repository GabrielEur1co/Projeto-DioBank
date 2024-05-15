import { DioAccount } from "./DioAccount";

export class InvestimentAccount extends DioAccount{

    constructor (name:string, accountNumber:number){
        super( name, accountNumber)

    }

    depositInvestiment = (invetimentBalance: number):void =>  {
        if(this.validateStatus()){
            this.setBalance(invetimentBalance + 10)

            console.log("Investimento realizado com sucesso!")
        }
    }

}