import React from "react";
const ContactPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="contact-details">
              <p>Email: contact@example.com</p>
              <p>Office Address: 123 Main Street, Anytown, USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
