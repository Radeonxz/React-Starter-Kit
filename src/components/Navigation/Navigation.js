/**
 * Navigation
 */
import React from "react";

const Navigation = ({ changeLocale }) => {
  return <p onClick={() => changeLocale("fr-ca")}>Navigation</p>;
};

export default Navigation;
