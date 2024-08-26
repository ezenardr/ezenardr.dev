import { memo, useCallback, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { directionHover } from "../utils";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction } = useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: "my ", last: "portfolio" }}
    >
      <div className="bl-content scrollbar-hide">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{" "}
            <span data-hover="portfolio"> portfolio</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-suitcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-1">
              <a href="#" onClick={() => activeShowProject(1)}>
                <img
                  className="responsive-img"
                  src="images/projects/somi.jpg"
                  alt="Somi Haiti"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Somi Haiti
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-2">
              <a href="#" onClick={() => activeShowProject(2)}>
                <img
                  className="responsive-img"
                  src="images/projects/wenshair.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Wenshair Barbershop
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-3">
              <a href="#" onClick={() => activeShowProject(3)}>
                <img
                  className="responsive-img"
                  src="images/projects/timbu.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Timbu Cloud Shop
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-4">
              <a href="#" onClick={() => activeShowProject(4)}>
                <img
                  className="responsive-img"
                  src="images/projects/advice.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">Advice Generator</span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-5">
              <a href="#" onClick={() => activeShowProject(5)}>
                <img
                  className="responsive-img"
                  src="images/projects/ip.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    IP Tracker
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-6">
              <a href="#" onClick={() => activeShowProject(6)}>
                <img
                  className="responsive-img"
                  src="images/projects/rest.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Where in The World
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-7">
              <a href="#" onClick={() => activeShowProject(7)}>
                <img
                  className="responsive-img"
                  src="images/projects/qr.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    QR Code
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-8">
              <a href="#" onClick={() => activeShowProject(8)}>
                <img
                  className="responsive-img"
                  src="images/projects/shortly.webp"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Shortly
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
              <a href="#" onClick={() => activeShowProject(9)}>
                <img
                  className="responsive-img"
                  src="images/projects/fylo.webp"
                  alt="fylo"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
