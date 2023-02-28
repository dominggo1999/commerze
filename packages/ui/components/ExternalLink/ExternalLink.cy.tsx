import React from "react";
import Link from "./ExternalLink";

describe("Link", () => {
  it("renders an external link correctly", () => {
    const href = "/about";
    const text = "About";
    cy.mount(
      <Link external href={href}>
        {text}
      </Link>,
    );

    cy.get("a").should("have.attr", "href").and("eq", href);

    cy.get("a").should("have.attr", "target").and("eq", "_blank");

    cy.get("a").should("have.attr", "rel").and("eq", "noreferrer noopener");
  });

  it("calls onClick function when the link is clicked", () => {
    const clickSpy = cy.spy().as("clickSpy");

    const href = "/about";
    const text = "About";
    cy.mount(
      <Link onClick={clickSpy} external href={href}>
        {text}
      </Link>,
    );

    cy.get("a").click();
    cy.get("@clickSpy").should("be.called");
  });
});
