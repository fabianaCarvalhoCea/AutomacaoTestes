Feature: Compra realizada com Boleto Bancário
Esta feature é responsável por realizar compra utilizando o boleto.

Scenario: Compra utilizando o boleto bancario
Given que estou logado no site da CEA  
And seleciono um produto desejado
And Eu seleciono a opcao de entrega
When Eu clico no botao ir para o pagamento
Then a opcao de boleto bancario e exibido com sucesso