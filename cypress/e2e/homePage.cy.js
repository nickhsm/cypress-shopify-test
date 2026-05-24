describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://r0938000-realbeans.myshopify.com/')
  })

  context("Log in to application", () => {
    // it("Search password field and enter password", () => {
      // cy.get('[name="password"]').type("deapea")
      // cy.get('button').click()
    // })

    it("Check home page", () => {
      cy.get('[name="password"]').type("deapea")
      cy.get('button').click()

      // Checks if intro exists
      cy.get('.hero__content-wrapper').contains("Since 1801, RealBeans")

      // Product exists
      cy.get('.resource-list__item').eq(0).contains("Blended")
      cy.get('.resource-list__item').eq(1).contains("Roasted")
    })

    it("Check product catalog page", () => {
      cy.get('[name="password"]').type("deapea")
      cy.get('button').click()

      // Navigate to catalog
      cy.get('.menu-list__link').eq(1).click()
      cy.location("pathname").should("eq", "/collections/all")

      // Check if product exists
      cy.get('.product-grid__item').eq(0).contains("Blended")
      cy.get('.product-grid__item').eq(1).contains("Roasted")

      // Check if sorting works (by price, low to high)
      cy.get('.facets__summary > span').contains("Sort").click()
      // 5th item is low to high
      cy.get('.sorting-filter__options-inner > label').eq(5).click()

      // Check if first item is lower than last item
      cy.get('.product-grid__item--0 div span.price').contains("€40,00 EUR")
      cy.get('.product-grid__item--1 div span.price').contains("€60,00 EUR")

    })

    it("Check blend page", () => {
      cy.get('[name="password"]').type("deapea")
      cy.get('button').click()

      // Navigate to catalog
      cy.get('.menu-list__link').eq(1).click()
      cy.location("pathname").should("eq", "/collections/all")

      // Check if product details are correct
      cy.get('.product-grid__item--0 img.product-media__image').eq(0).click()
      cy.location("pathname").should("eq", "/products/blended-coffee-5kg")
      // We are in

      cy.get('div.product-details rte-formatter > p').contains("RealBeans coffee, ready to brew.")
      cy.get('div.product-details product-price div > span.price').contains("€60,00 EUR")
      cy.get('div.product-information__media img.product-media__image[src*="RealBeansBlendBag.png"]').should('exist')
    })

    it("Check roast page", () => {
      cy.get('[name="password"]').type("deapea")
      cy.get('button').click()

      // Navigate to catalog
      cy.get('.menu-list__link').eq(1).click()
      cy.location("pathname").should("eq", "/collections/all")

      // Check if product details are correct
      cy.get('.product-grid__item--1 img.product-media__image').eq(0).click()
      cy.location("pathname").should("eq", "/products/roasted-coffee-beans-5kg")
      // We are in

      cy.get('div.product-details rte-formatter > p').contains("Our best and sustainable real roasted beans.")
      cy.get('div.product-details product-price div > span.price').contains("40,00 EUR")
      cy.get('div.product-information__media img.product-media__image[src*="RealBeansRoastedBag.png"]').should('exist')
    })

    it("Check history page", () => {
      cy.get('[name="password"]').type("deapea")
      cy.get('button').click()

      // Navigate to catalog
      cy.get('.menu-list__link').eq(3).click()
      cy.location("pathname").should("eq", "/pages/about-us")

      // Get text
      cy.get('.section-content-wrapper div > rte-formatter > p > em').contains("From a small Antwerp")
    })
  })
})