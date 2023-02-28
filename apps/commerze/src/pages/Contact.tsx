import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Container } from "@acme/ui";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container className="mt-6">
      <div className="flex flex-col items-center">
        <h1 className="mb-8 text-3xl font-bold text-primary">Contact Us</h1>

        <div className="mb-6 flex items-center space-x-4">
          <FaMapMarkerAlt className="text-2xl text-primary" />
          <p className="text-lg">1234 Main Street, Anytown USA</p>
        </div>

        <div className="mb-6 flex items-center space-x-4">
          <FaPhone className="text-2xl text-primary" />
          <p className="text-lg">(123) 456-7890</p>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-2xl text-primary" />
          <Link
            target="_blank"
            to="mailto:info@test.com"
            className="text-lg hover:text-primary"
          >
            info@acme.com
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
