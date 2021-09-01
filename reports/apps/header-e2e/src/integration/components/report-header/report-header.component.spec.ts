describe('header', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reportheadercomponent--primary'));
  it('should render the component', () => {
    cy.get('reports-report-header').should('exist');
  });
});