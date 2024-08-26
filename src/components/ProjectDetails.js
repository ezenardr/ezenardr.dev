import { memo, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { LocalVideo } from "./ItemDetailsContent";

import dynamic from "next/dynamic";

const ProjectSlider = dynamic(() => import("./ItemDetailsContent"), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll("#bl-panel-work-items>div").length);
  }, []);

  return (
    <div
      className={` bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {/* Project Starts */}
      <div
        data-panel="panel-1"
        className={activeProject == 1 ? "bl-show-work " : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/somi.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Somi Haiti</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700">Client </span>:{" "}
                <span className="font-weight-400 uppercase">Somi Haiti</span>
              </li>
              {/*<li>*/}
              {/*  <i className="fa fa-calendar-o" />*/}
              {/*  <span className="font-weight-700"> Start Date </span>:{" "}*/}
              {/*  <span className="font-weight-400 uppercase">02/09/2022</span>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <i className="fa fa-calendar-check-o" />*/}
              {/*  <span className="font-weight-700"> End Date </span>:{" "}*/}
              {/*  <span className="font-weight-400 uppercase">02/08/2023</span>*/}
              {/*</li>*/}
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  TypeScript, Scss, NextJs, next-intl
                </span>
              </li>
            </ul>
            <hr />
            <a
                target="_blank"
                rel="noreferrer"
              href="https://somihaiti.org/en"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-2"
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
                className="responsive-img"
                src="images/projects/wenshair.webp"
                alt="project"
            />
          </div>
          {/*<div className="col s12 l6 xl6 section-padding section-padding-right-none">*/}
          {/*  <ProjectSlider />*/}
          {/*</div>*/}
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Wenshair Barbershop</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user"/>
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Kerwens TELISME</span>
              </li>

              <li>
                <i className="fa fa-cogs"/>{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  TypeScript, Scss, NextJs, Nodemailer, Framer-motion
                </span>
              </li>
            </ul>
            <hr/>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://wenshair.com"
                className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link"/>
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
          data-panel="panel-3"
          className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
                className="responsive-img"
                src="images/projects/timbu.webp"
                alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Timbu Cloud Shop</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">HNG 11 Stage</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  TypeScript, Tailwind Css, Nextjs, Tanstack-query
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel="noreferrer"
              href="https://timbu.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-4"
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
                className="responsive-img"
                src="images/projects/advice.webp"
                alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Advice Generator App</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Frontend Mentor</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Javascript, Css, ReactJS, ViteJS, adviceslip API
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://advice.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-5"
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/ip.webp" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Ip Address Tracker</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Frontend Mentor</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  TypeScript, Css, Reactjs, ViteJs, Leafletjs, Geo-Ipify API
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://iptracker.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-6"
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/rest.webp" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Where In The World</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/08/2023</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  TypeScript, TailwindCss, NextJs, Rest Countries API
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://restcountries.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-7"
        className={activeProject == 7 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/qr.webp" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">QR Code</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Frontend Mentor</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Html, css
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://qrcode.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-8"
        className={activeProject == 8 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/shortly.webp" alt="shortly" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Shortly</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Frontend Mentor</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Javascript, ReactJs, ViteJs, TailwindCss, URl shortening API
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://shortly.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-9"
        className={activeProject == 9 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/fylo.webp" alt="fylo" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Fylo</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Frontend Mentor</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Javascript, Reactjs, ViteJS, TailwindCSS
                </span>
              </li>
            </ul>
            <hr />
            <a
                target={'_blank'}
                rel={'noreferrer'}
              href="https://fylo.ezenardr.dev/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Portfolio Navigation Starts */}
      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className="control-button bl-previous-work"
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className="fa fa-angle-left" />
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <img
          alt="close"
          src="images/close-button.png"
          className="control-button bl-icon-close"
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className="control-button bl-next-work"
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1
            )
          }
        >
          <i className="fa fa-angle-right" />
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
