import { mount } from '@cypress/vue'
import App from '@/App.vue'

describe('Color Change Test', () => {
  it('should change the color of the box when the button is clicked', () => {
    // Montar el componente
    mount(App)

    // Verificar el color inicial del recuadro
    cy.get('.box').should('have.attr', 'style').and('include', 'background-color: blue')

    // Hacer clic en el botón para cambiar el color
    cy.contains('Cambiar Color').click()

    // Verificar que el color ha cambiado a rojo
    cy.get('.box').should('have.attr', 'style').and('include', 'background-color: red')

    // Hacer clic en el botón para cambiar el color de nuevo
    cy.contains('Cambiar Color').click()

    // Verificar que el color ha vuelto a azul
    cy.get('.box').should('have.attr', 'style').and('include', 'background-color: blue')
  })
})
