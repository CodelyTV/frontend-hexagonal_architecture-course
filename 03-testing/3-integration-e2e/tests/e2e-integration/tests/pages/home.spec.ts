describe("The Home Page", () => {
	it("creates a course when filling up the form correctly", () => {
		cy.visit("/");
		cy.findByLabelText(/Course title/i).type("Awesome Hexagonal Architecture");
		cy.findByLabelText(/Image URL/i).type("http://placekitten.com/500/400");
		cy.findByText(/create course/i).click();
		cy.findByRole("heading", { name: /Course created/i }).should("exist");
		cy.findByRole("heading", { name: "Awesome Hexagonal Architecture" }).should("exist");
	});
});
