import React from "react";

const Text = ({ html, styl }) => {
  return <p style={{ ...styl }} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Text;
