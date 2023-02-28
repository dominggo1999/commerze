import React from "react";
import { Button, Link } from "@acme/ui";

const App = () => {
  return (
    <>
      <Link
        external
        href="https://www.npmjs.com/package/query-string?activeTab=versions"
      >
        Hello world
      </Link>
      <br />
      <Button>Test</Button>
      <br />
      <div className="bg-red-500">App</div>;
    </>
  );
};

export default App;
