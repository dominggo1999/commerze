import React from "react";
import PageMessage, { PageMessageProps } from "./PageMessage";
import { BiError } from "react-icons/bi";

describe("PageMessage", () => {
  const defaultProps: PageMessageProps = {
    title: "Page Not Found",
    message: "The page you are looking for could not be found.",
  };

  it("renders default props correctly", () => {
    cy.mount(<PageMessage {...defaultProps} />);

    cy.contains(defaultProps.title);
    cy.contains(defaultProps.message);

    cy.get("main svg");
  });

  it("renders with custom code and icon props correctly", () => {
    const props: PageMessageProps = {
      ...defaultProps,
      code: 404,
      icon: <BiError data-testid="custom-icon" />,
    };
    cy.mount(<PageMessage {...props} />);
    cy.contains(props.title);
    cy.contains(props.message);
    cy.contains("404");

    cy.get("main svg");
    cy.get('[data-testid="custom-icon"]');
  });
});
