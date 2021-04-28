import React from 'react';

const Contact = () => {
  return (
    <div>
      <main>
        <section>
          <div className="row">
            <div className="col-md-6 mt-4 ml-4 mb-4">
              <span className="anchor" id="formContact"></span>
              <div className="card card-outline-custom">
                <div className="card-header">
                  <h3 className="mb-0">Contact Me</h3>
                </div>
                <div className="card-body">
                  <form className="form" autocomplete="off">
                    <fieldset>
                      <label for="name2" className="mb-0">
                        Name
                      </label>
                      <div className="row mb-1">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            name="name2"
                            id="name2"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <label for="email2" className="mb-0">
                        Email
                      </label>
                      <div className="row mb-1">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            name="email2"
                            id="email2"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <label for="message2" className="mb-0">
                        Message
                      </label>
                      <div className="row mb-1">
                        <div className="col-lg-12">
                          <textarea
                            rows="6"
                            name="message2"
                            id="message2"
                            className="form-control"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-custom btn-lg float-right"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
