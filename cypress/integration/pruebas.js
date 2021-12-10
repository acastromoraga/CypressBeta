describe('Busqueda de elementos', function(){
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Busqueda para multiples elementos', function(){
        
        cy.fixture('busqueda').then((index)=>{
            cy.get(index.archivoBusqueda).type('dress');
            cy.get(index.btnBusqueda).click();
        })
        cy.fixture('resultados').then((resultados)=>{
            cy.get(resultados.textoResultado).should('contain','dress')
        })
    })
    it('Busqueda para multiples elementos', function(){
        
        cy.fixture('busqueda').then((index)=>{
            cy.get(index.archivoBusqueda).type('queso');
            cy.get(index.btnBusqueda).click();
        })
        cy.fixture('resultados').then((resultados)=>{
            cy.get(resultados.alerta).should('contain','No results were found for your search "queso"');
        })
    })
})