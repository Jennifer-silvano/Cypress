

describe('Transações', () =>{
   
    beforeEach(() =>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")

    });

    it('Cadastrar uma entrada', () => {
        
        criarTransacao("freela", 250)
        
        cy.get('.description').should("have.text", "freela")
    });

    it('Cadastrar uma saída', () => {
        
        criarTransacao("cinema", -60)

        cy.get('.description').should("have.text", "cinema")
    });

   
    it('Excluir transação',() =>{

       criarTransacao ("freela", 100)
       criarTransacao ("mesada", 100)

       //exemplo cy.contains(".description", "freela")
       //.parent()
       //.find('img')
       //.click()


       cy.contains(".description", "freela")
         .siblings()
         .children('img')
         .click()
         
       cy.get('tbody tr').should("have.length", "1")
    });


});

function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()

    cy.get('#description').type(descricao)

    cy.get('#amount').type(valor)

    cy.get('#date').type("2024-07-15")//yyyy-mm-dd
    
    cy.contains('button', 'Salvar').click()
}