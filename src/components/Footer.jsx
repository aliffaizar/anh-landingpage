import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="w-full bg-gray-900 text-gray-300">
      <div className="container py-10 text-center">
        A&H Fruits Group ©{date}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
