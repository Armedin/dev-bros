import { Route, Switch, matchPath } from "react-router-dom";
import Post from "../components/Post";
import Targets from "../components/Targets";

const url = "/project/a53319c004ca8636f";
const SingleProject = () => {
  const pathname = window.location.pathname;
  return (
    <div className="app-container container-xxl">
      <div className="d-flex flex-stack pb-8">
        <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
          <h1 className="page-heading d-flex text-dark fw-bolder fs-3 flex-column justify-content-center my-0">
            View Project
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <li className="breadcrumb-item text-muted">
              <a
                href="/metronic8/demo1/../demo1/index.html"
                className="text-muted text-hover-primary"
              >
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li className="breadcrumb-item text-muted">Projects</li>
          </ul>
        </div>
      </div>

      <div className="card mb-6 mb-xl-9">
        <div className="card-body pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
              <div className="symbol symbol-45px me-5">
                <span
                  className="symbol-label bg-light-danger text-danger fw-bolder"
                  style={{ fontSize: 40 }}
                >
                  T
                </span>
              </div>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <a className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">
                      Test Project
                    </a>
                    <span className="badge badge-light-success me-auto">
                      In Progress
                    </span>
                  </div>
                  <div className="d-flex flex-wrap mb-4 fs-5 text-gray-400">
                    Small description about the project goes here ...
                  </div>

                  <div className="d-flex flex-wrap justify-content-start">
                    <div className="d-flex flex-wrap">
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="fs-4 fw-bold">Sept 25, 2022</div>
                        </div>
                        <div className="fw-semibold fs-6 text-gray-400">
                          Last Update
                        </div>
                      </div>
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.5"
                                x="11"
                                y="18"
                                width="13"
                                height="2"
                                rx="1"
                                transform="rotate(-90 11 18)"
                                fill="currentColor"
                              ></rect>
                              <path
                                d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <div
                            className="fs-4 fw-bold counted"
                            data-kt-countup="true"
                            data-kt-countup-value="75"
                            data-kt-initialized="1"
                          >
                            10
                          </div>
                        </div>
                        <div className="fw-semibold fs-6 text-gray-400">
                          Open Targets
                        </div>
                      </div>
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            className="fs-4 fw-bold counted"
                            data-kt-countup="true"
                            data-kt-countup-value="15000"
                            data-kt-countup-prefix="$"
                            data-kt-initialized="1"
                          >
                            $15,000
                          </div>
                        </div>
                        <div className="fw-semibold fs-6 text-gray-400">
                          Budget Spent
                        </div>
                      </div>
                    </div>
                    <div className="symbol-group symbol-hover mb-3">
                      <div className="symbol symbol-35px symbol-circle">
                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-8.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-7.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-5.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <a
                    className="btn btn-sm btn-info me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_new_target"
                  >
                    Add Target
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
            <li className="nav-item">
              <a
                className={`nav-link text-active-primary py-5 me-6 ${
                  pathname === url && "active"
                }`}
                href={url}
              >
                Updates
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-active-primary py-5 me-6 ${
                  pathname === url + "/targets" && "active"
                }`}
                href={url + "/targets"}
              >
                Targets
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Switch>
        <Route path="/project/a53319c004ca8636f/targets">
          <Targets />
        </Route>
        <Route path="/project/a53319c004ca8636f">
          <Post />
        </Route>
      </Switch>
    </div>
  );
};

export default SingleProject;
