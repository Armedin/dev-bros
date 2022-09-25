const Targets = () => {
  return (
    <div>
      <div className="d-flex flex-wrap flex-stack">
        <h3 className="fw-bold my-2">
          Project Targets
          <span className="fs-6 text-gray-400 ms-2">by Recent Updates ↓</span>
        </h3>
        <div className="d-flex flex-wrap my-1">
          <span
            className="select2 select2-container select2-container--bootstrap5 select2-container--below select2-container--focus"
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single form-select form-select-sm border-body bg-body w-150px"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                aria-disabled="false"
                aria-labelledby="select2-status-5i-container"
                aria-controls="select2-status-5i-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-status-5i-container"
                  role="textbox"
                  aria-readonly="true"
                  title="Recently Updated"
                >
                  Sort By
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation"></b>
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true"></span>
          </span>
        </div>
      </div>

      <div className="row g-9 mt-4">
        <div className="col-md-4 col-lg-12 col-xl-4">
          <div className="mb-9">
            <div className="d-flex flex-stack">
              <div className="fw-bold fs-4 pb-1">
                To Do<span className="fs-6 text-gray-400 ms-3">1</span>
              </div>
            </div>
            <div className="h-3px w-100 bg-warning" />
          </div>
          <div className="card mb-6 mb-xl-9">
            <div className="card-body">
              <div className="d-flex flex-stack mb-3">
                <div className="badge badge-light">Budget</div>
              </div>
              <div className="mb-2">
                <div className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">
                  Meeting with customer
                </div>
              </div>
              <div className="text-gray-600 mb-5">
                First, a disclaimer - the entire process writing a blog post
                often takes a couple of hours if you can type
              </div>
              <div className="d-flex flex-stack flex-wrapr">
                <div className="symbol-group symbol-hover mb-3">
                  <div className="symbol symbol-35px symbol-circle">
                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                  </div>
                </div>
                <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                  <span className="svg-icon svg-icon-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="6"
                        y="12"
                        width="7"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="6"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <span className="ms-1 fs-7 fw-bold text-gray-600">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-12 col-xl-4">
          <div className="mb-9">
            <div className="d-flex flex-stack">
              <div className="fw-bold fs-4 pb-1">
                In Progress<span className="fs-6 text-gray-400 ms-3">1</span>
              </div>
            </div>
            <div className="h-3px w-100 bg-info" />
          </div>
          <div className="card mb-6 mb-xl-9">
            <div className="card-body">
              <div className="d-flex flex-stack mb-3">
                <div className="badge badge-light">Budget</div>
              </div>
              <div className="mb-2">
                <div className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">
                  Meeting with customer
                </div>
              </div>
              <div className="text-gray-600 mb-5">
                First, a disclaimer - the entire process writing a blog post
                often takes a couple of hours if you can type
              </div>
              <div className="d-flex flex-stack flex-wrapr">
                <div className="symbol-group symbol-hover mb-3">
                  <div className="symbol symbol-35px symbol-circle">
                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                  </div>
                </div>
                <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                  <span className="svg-icon svg-icon-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="6"
                        y="12"
                        width="7"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="6"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <span className="ms-1 fs-7 fw-bold text-gray-600">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-12 col-xl-4">
          <div className="mb-9">
            <div className="d-flex flex-stack">
              <div className="fw-bold fs-4 pb-1">
                Done<span className="fs-6 text-gray-400 ms-3">1</span>
              </div>
            </div>
            <div className="h-3px w-100 bg-success" />
          </div>
          <div className="card mb-6 mb-xl-9">
            <div className="card-body">
              <div className="d-flex flex-stack mb-3">
                <div className="badge badge-light">Budget</div>
              </div>
              <div className="mb-2">
                <div className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">
                  Meeting with customer
                </div>
              </div>
              <div className="text-gray-600 mb-5">
                First, a disclaimer - the entire process writing a blog post
                often takes a couple of hours if you can type
              </div>
              <div className="d-flex flex-stack flex-wrapr">
                <div className="symbol-group symbol-hover mb-3">
                  <div className="symbol symbol-35px symbol-circle">
                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                  </div>
                </div>
                <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                  <span className="svg-icon svg-icon-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="6"
                        y="12"
                        width="7"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="6"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <span className="ms-1 fs-7 fw-bold text-gray-600">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targets;
