import { useEffect } from "react";
import Page from "../../components/Page";
import { convertStyleToReact } from "../../utils/helper.function";
import "./home.css";

export default function Home() {
  useEffect(() => {
    convertStyleToReact(
      "border-bottom-width: 1px;border-bottom-color: var(--bs-navbar-active-color);"
    );
  }, []);
  return (
    <Page title="Home">
      <div className="container">
        <div className="row align-items-center event-block no-gutters margin-40px-bottom">
          <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
              <img
                src="https://www.bootdey.com/image/450x280/FFB6C1/000000"
                alt=""
              />
              <div className="events-date">
                <div className="font-size28">10</div>
                <div className="font-size14">Mar</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="event-details.html" className="text-theme-color">
                  Business Conference
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <i className="far fa-clock margin-10px-right"></i> 01:30 PM -
                  04:30 PM
                </li>
                <li>
                  <i className="fas fa-user margin-5px-right"></i> Speaker :
                  John Sminth
                </li>
              </ul>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore
              </p>
              <a
                className="butn small margin-10px-top md-no-margin-top"
                href="event-details.html"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center event-block no-gutters margin-40px-bottom">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="event-details.html" className="text-theme-color">
                  Craft Workshops
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <i className="far fa-clock margin-10px-right"></i> 09:00 AM -
                  09:30 PM
                </li>
                <li>
                  <i className="fas fa-user margin-5px-right"></i> Speaker :
                  Alexa Zone
                </li>
              </ul>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore
              </p>
              <a
                className="butn small margin-10px-top md-no-margin-top"
                href="event-details.html"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative">
              <img
                src="https://www.bootdey.com/image/450x280/87CEFA/000000"
                alt=""
              />
              <div className="events-date">
                <div className="font-size28">25</div>
                <div className="font-size14">Feb</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center event-block no-gutters margin-40px-bottom">
          <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
              <img
                src="https://www.bootdey.com/image/450x280/B0C4DE/000000"
                alt=""
              />
              <div className="events-date">
                <div className="font-size28">20</div>
                <div className="font-size14">Feb</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="event-details.html" className="text-theme-color">
                  Mentorship Program
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <i className="far fa-clock margin-10px-right"></i> 09:20 AM -
                  12:00 AM
                </li>
                <li>
                  <i className="fas fa-user margin-5px-right"></i> Speaker :
                  Avil Mex
                </li>
              </ul>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore
              </p>
              <a
                className="butn small margin-10px-top md-no-margin-top"
                href="event-details.html"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center event-block no-gutters margin-40px-bottom">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="event-details.html" className="text-theme-color">
                  Technical Events
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <i className="far fa-clock margin-10px-right"></i> 10:00 AM -
                  09:00 PM
                </li>
                <li>
                  <i className="fas fa-user margin-5px-right"></i> Speaker :
                  Venil Monts
                </li>
              </ul>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore
              </p>
              <a
                className="butn small margin-10px-top md-no-margin-top"
                href="event-details.html"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative">
              <img
                src="https://www.bootdey.com/image/450x280/7B68EE/000000"
                alt=""
              />
              <div className="events-date">
                <div className="font-size28">25</div>
                <div className="font-size14">Sep</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center event-block no-gutters">
          <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
              <img
                src="https://www.bootdey.com/image/450x280/FF0000/000000"
                alt=""
              />
              <div className="events-date">
                <div className="font-size28">10</div>
                <div className="font-size14">Oct</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="event-details.html" className="text-theme-color">
                  Startup Events
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <i className="far fa-clock margin-10px-right"></i> 11:00 AM -
                  09:00 PM
                </li>
                <li>
                  <i className="fas fa-map-marker-alt margin-5px-right"></i>{" "}
                  Speaker : Mavil Aven
                </li>
              </ul>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore
              </p>
              <a
                className="butn small margin-10px-top md-no-margin-top"
                href="event-details.html"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
