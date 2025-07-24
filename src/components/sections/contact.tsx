import React, { useRef, useState } from "react";
import SectionTitle from "@components/ui/sectionTitle";
import SlideUp from "@utils/animations/slideUp";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("myzpeaqv"); // Your Formspree ID
  const [message, setMessage] = useState("");

  // Clear messages and form after submission
  React.useEffect(() => {
  if (state.succeeded) {
    setMessage("Thank you! Your message has been sent.");
    formRef.current?.reset();
    setTimeout(() => setMessage(""), 500);
  }

  if (state.errors && state.errors.length > 0) {
    setMessage("Something went wrong. Please try again.");
    setTimeout(() => setMessage(""), 500);
  }
}, [state]);


  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-25 wow fadeInUp delay-0-2s">
              <SectionTitle className="mb-40">
                <SectionTitle.Name>Contact me</SectionTitle.Name>
                <SectionTitle.Title>
                  Let’s Talk About your <span>Next Projects</span>
                </SectionTitle.Title>
                <SectionTitle.Description>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </SectionTitle.Description>
              </SectionTitle>

              <SlideUp delay={3} className="single-contact">
                <div className="contact-icon">
                  <i className="fa fa-phone" />
                </div>
                <h2>Contact Number:</h2>
                <p>+91 9566425658</p>
              </SlideUp>

              <SlideUp delay={4} className="single-contact">
                <div className="contact-icon">
                  <i className="fa fa-envelope" />
                </div>
                <h2>Email us:</h2>
                <p>ranjitpr1124@gmail.com</p>
              </SlideUp>
            </div>
          </div>

          <div className="col-lg-8">
            <SlideUp delay={2} className="contact-form contact-form-area overflow-hidden">
              <form
                id="contactForm"
                className="contactForm"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Diego Liam"
                        required
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="hello@websitename.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="+1234567890"
                        required
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write your message"
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>

                  {message && (
                    <div className="col-md-12">
                      <div className="form-group">
                        <p style={{ color: state.succeeded ? "green" : "red" }}>{message}</p>
                      </div>
                    </div>
                  )}

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn" disabled={state.submitting}>
                        {state.submitting ? "Sending..." : "Send Message"}{" "}
                        <i className="far fa-angle-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
