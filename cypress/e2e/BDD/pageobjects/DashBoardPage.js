export class DashBoardPage {

    elements = {
		dashboardHeader: () => cy.get('div > h1'),
		itemName: () => cy.get('.inventory_item_name'),
    };

    verifyDashboardPageDisplayed() {
        //return cy.get("div > h1").should("be.visible")
        return this.elements.dashboardHeader().should("be.visible")
    }

    clickOrderViewBtn() {
        cy.xpath("(//*[@id='orders-grid']//span[.='Pending']/following::a[@class='btn btn-default'])[1]")
        .click({ multiple: true })
    }
}