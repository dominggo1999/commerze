import React from "react";
import { Container, PageMessage, Button } from "@acme/ui";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const NotFound = () => {
  return (
    <Container>
      <PageMessage
        title="Page Not Found"
        message="Oops! We're sorry, but the page you're looking for can't be found. It's possible that the page has been moved or deleted, or that you've entered the URL incorrectly."
        code={404}
      />
      <div className="mt-5 flex justify-center">
        <Button
          component={Link}
          to="/"
          icon={BiArrowBack}
          iconPosition="left"
          size="sm"
        >
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
