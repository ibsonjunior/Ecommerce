import React from "react";

import FormPost from "../components/Form/Post";
import FormDelete from "../components/Form/Delete";
import FormUpdate from "../components/Form/Update";
import Footer from "../components/Footer";

import { Navbar } from "react-bootstrap";

export default function Administration() {
  return (
    <>
      <Navbar />

      <FormPost />

      <FormDelete />

      <FormUpdate />

      <Footer />
    </>
  );
}