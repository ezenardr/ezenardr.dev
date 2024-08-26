import { memo, useState } from "react";
import SectionContainer from "./SectionContainer";
const GetInTouch = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      setIsLoading(true);
      fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(mailData)
      }).then(res => res.json()).then(() => window.location.reload()).catch(e => console.log(e));
      setIsLoading(false);
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer
      sectionName="Contact"
      title={{ first: "get", last: "in touch" }}
    >
      <div className="bl-content scrollbar-hide">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="get">get </span>
            {""}
            <span data-hover="in touch">in touch</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-envelope-open" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          <div className="row contact section-padding">
            {/* Contact Infos Starts */}
            <div className="col s12 m5 l5 xl4 leftside">
              {/* Contacts Starts */}
              <h6 className="font-weight-700 uppercase">Phone</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-phone" /> +509 40 88 42 71
              </span>
              <h6 className="font-weight-700 uppercase">Email</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-envelope" /> contact@ezenardr.dev
              </span>
              <h6 className="font-weight-700 uppercase">Github</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-github" /> ezenardr
              </span>
              <h6 className="font-weight-700 uppercase">Address</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-home" /> Cayes, Haiti
              </span>
              <br />
              {/* Contacts Ends */}
              {/* Social Media Profiles Starts */}
              <h6 className="font-weight-700 uppercase">Social Profiles</h6>
              <div className="social">
                <ul className="list-inline social social-intro center-align p-none">
                  <li className="facebook">
                    <a href="https://www.instagram.com/ezenardr/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://x.com/ezenardr">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="https://www.github.com/ezenardr">
                      <i className="fa fa-github" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="https://www.linkedin.com/in/ezenardr">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col s12 m7 l7 xl8 rightside">
              <h6 className="uppercase m-none font-weight-700">
                Feel free to drop me a line
              </h6>
              <div className="row">
                <p className="col s12 m12 l12 xl10 second-font">
                  Not sure where to start with your web project? I provide expert advice and consultation. I&apos;ll guide you through every step of the process.
                </p>
              </div>
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                {/* Name Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-user prefix" />
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => onChange(e)}
                    value={name}
                    type="text"
                    className="validate"
                  />
                  <label className="font-weight-400" htmlFor="name">
                    Your Name
                  </label>
                </div>
                {/* Name Field Ends */}
                {/* Email Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-envelope prefix" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={email}
                    className="validate"
                    required=""
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                {/* Email Field Ends */}
                {/* Comment Textarea Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-comments prefix" />
                  <textarea
                    id="comment"
                    name="message"
                    onChange={(e) => onChange(e)}
                    value={message}
                    className="materialize-textarea"
                    required
                  />
                  <label htmlFor="comment">Your Comment</label>
                </div>
                {/* Comment Textarea Ends */}
                {/* Submit Form Button Starts */}
                <div className="col s12 m12 l9 xl8 submit-form">
                  <button
                    className="btn font-weight-700"
                    type="submit"
                    name="send"
                    disabled={isLoading}
                  >
                    Send Message <i className="fa fa-send" />
                  </button>
                </div>
                {/* Submit Form Button Ends */}
                <div className="col s12 m12 l8 xl8 form-message">
                  <div
                    className={error ? "red-text" : "green-text"}
                    style={{ opacity: error == null ? "0" : "1" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(GetInTouch);
