import { Container } from "@acme/ui";

const About = () => {
  return (
    <Container className="mt-5 flex flex-col items-center text-center">
      <h1 className="mb-4 text-3xl font-bold text-primary">About Us</h1>
      <p className="mb-8 max-w-[700px] sm:text-lg xl:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor
        neque eu convallis mollis. Proin finibus tristique libero, sed blandit
        nulla convallis vel. Donec euismod consectetur ligula, sed bibendum est
        gravida id.
      </p>
    </Container>
  );
};

export default About;
