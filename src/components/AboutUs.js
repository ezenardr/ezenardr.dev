import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Frontend Engineer - </span>Japahub
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2023 - Now
          </span>
          <p>
            Japahub is a dedicated online space for individuals to connect and support each other as they travel to
            live, study, or work abroad.<br/>
            <Link href={'https://info.japahub.com'}>
            info.japahub.com
          </Link>
          </p>

        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Web Developer - </span>Somi Haiti
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2024 - Now
          </span>
          <p>
            SOMI Haiti is dedicated to making a lasting impact on the lives of those we serve, promoting dignity, hope, and well-being.
            <br/>
            <Link href={'https://somihaiti.org'}>
              somihaiti.org
            </Link>
          </p>
        </div>
        {/* Single Experience Ends */}
        {/*<span className="separator" />*/}
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Electronic Engineering - </span>Université INUKA
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2019 - 2023
          </span>
          <p>
            I developed a strong foundation in the principles of electronics, circuit design, and digital systems.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Computer Science - </span>Université Episcopale d&apos;Haiti
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2023 - Now
          </span>
          <p>
            My education focused on the theoretical/practical aspects of computing, enabling me to write efficient code and design software systems.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Web Development - </span>Udemy
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2018 - 2019
          </span>
          <p>
            This self-driven learning experience fueled my passion for continuous learning in the ever-evolving field of web development.
          </p>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">html</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">js/ts</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">css</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">React/Nextjs</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            <div className="resume-content">
              <h6 className="uppercase">NodeJS</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}

          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">SQL</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Git/github</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">CI/CD</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" /> <i className="fa fa-star-o" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">wordpress</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Adobe Photoshop</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" /> <i className="fa fa-star-o" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content scrollbar-hide">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/men.webp"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Personal Info
              </h6>
              <div className="col m12 l12 xl9 p-none">
                <p className="second-font">
                  I believe
                  that great web development is understanding the end-users,
                  leveraging the latest technologies, and crafting seamless user
                  experiences.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span className="font-weight-700">First Name: </span>
                    Rodolphe
                  </li>
                  <li>
                    <span className="font-weight-700">Last Name: </span>
                    Ezenard
                  </li>
                  {/*<li>*/}
                  {/*  <span className="font-weight-700">Date of birth: </span>*/}
                  {/*  21 june 1990{" "}*/}
                  {/*</li>*/}
                  <li>
                    <span className="font-weight-700">Nationality: </span>
                    Haitian
                  </li>
                  <li>
                    <span className="font-weight-700">Freelance: </span>
                    Available
                  </li>
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Phone: </span>+509 40 88 42 71
                  </li>
                  <li>
                    <span className="font-weight-700">Address: </span>
                    Les Cayes, Haiti
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    contact@ezenardr.dev
                  </li>
                  <li>
                    <span className="font-weight-700">Spoken Langages: </span>
                    French - English - Haitian Creole
                  </li>
                  {/*<li>*/}
                  {/*  <span className="font-weight-700">Skype: </span>*/}
                  {/*  mark.smith*/}
                  {/*</li>*/}
                </ul>
              </div>
              {/*<a href="#" className="btn font-weight-700">*/}
              {/*  Download Resume <i className="fa fa-file-pdf-o" />*/}
              {/*</a>*/}
              {/*<Link href={`/blog-${dark ? "dark" : "light"}`}>*/}
              {/*  <a className="btn btn-blog font-weight-700">*/}
              {/*    My Blog <i className="fa fa-edit" />*/}
              {/*  </a>*/}
              {/*</Link>*/}
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges">
          <div className="row">
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-briefcase" />
                <span className="font-weight-900">5+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Years Experience</h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-handshake-o" />
                <span className="font-weight-900">20+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Done Projects</h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-heart-o" />
                <span className="font-weight-900">23+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Happy Clients</h6>
            </div>
            {/* Fact Badge Item Ends */}
          </div>
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
