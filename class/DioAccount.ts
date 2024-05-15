export abstract class DioAccount{
    private name:string
    private readonly accountNumeber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNumber: number){
        this.name = name
        this.accountNumeber = accountNumber
    }

    setName = (name:string): void =>{
        this.name = name
        console.log ("Nome alterado com sucesso! ")
    }

    getName = (): string =>{
        return this.name
    }


    deposit = (newbalance:number):void =>{
        if (this.validateStatus()){
           this.balance = this.balance + newbalance

        }

    }

    withdraw = (valueWithdraw: number):void =>{
        if(this.validateStatus()){
            if(valueWithdraw > this.balance){
            console.log("Saldo insuficiente!")
            }else if(valueWithdraw <= this.balance){
            this.balance = this.balance - valueWithdraw
            console.log("Saque realizado com sucesso ")
            }
        }
        
    }

    public setBalance = (balance: number ):void  =>{
        this.balance = balance  
        
    }

    public getBalance = ():number =>{
        
         return this.balance

    }

    public validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta invalida!!!')

    }


}