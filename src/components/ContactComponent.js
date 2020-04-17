import React from "react";

const ContactComponent = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="eamil@email.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="Description"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
