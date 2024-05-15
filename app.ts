
import { PeopleAccount } from "./class/PeopleAccount"

import { CompanyAccount } from "./class/CompanyAccount"
import { InvestimentAccount } from "./class/InvestmentAccount"

//Cira uma conta do Tipo PeopleAccount:

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Conta pessoa física: Eurico", 10)
console.log("Imprime a conta do tipo PeopleAccount: ")
console.log(peopleAccount)
console.log("Testa o metodo de depósito(deposit):")
peopleAccount.deposit(100)
console.log("Imprime a conta do tipo PeopleAccount depois do deposito:")
console.log(peopleAccount)
console.log("Testa o metodo saque(withDraw): ")
peopleAccount.withdraw(50)
console.log(peopleAccount)

//Cria uma Conta do tipo CompanyAccount:

const companyAccount: CompanyAccount = new CompanyAccount("Conta Pessoa Jurudíca: Studio Lash", 11)
console.log("Imprime Conta do tipo CompanyAccount:")
console.log(companyAccount)
console.log("Testa metodo de depósito: ")
companyAccount.deposit(100)
console.log("Imprime conta do tipo CompanyAccout depois do deposito: ")
console.log(companyAccount)
console.log("Testa o metodo de emprestimo(getLogan): ")
companyAccount.getLogan()
console.log("Imprime o saldo após o emprestimo: ")
console.log(companyAccount)

//Cria uma conta do tipo InvestimentAccount:

const investimentAccount: InvestimentAccount = new InvestimentAccount("Conta investimento", 111)
console.log("Imprime conta conta investimento: ")
console.log(investimentAccount)
console.log("Testa o metodo de depósito de investimento(depositInvestiment): ")
investimentAccount.depositInvestiment(1000)
console.log("Imprime a conta de investimento após o deposito: ")
console.log(investimentAccount)



