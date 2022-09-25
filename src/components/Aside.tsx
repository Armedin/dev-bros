const Aside = () => {
  return (
    <div
      id="kt_app_sidebar"
      className="app-sidebar flex-column"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="225px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <div className="aside-primary d-flex flex-column flex-row-auto">
        <div
          className="aside-logo d-lg-flex flex-column align-items-center flex-column-auto py-10"
          id="kt_aside_logo"
        >
          <a href="/seven-html-free/?page=index">
            <img
              alt=""
              src="https://preview.keenthemes.com/seven-html-free/assets/media/logos/logo-default.svg"
              className="h-50px"
            />
          </a>
        </div>
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div className="app-sidebar-wrapper hover-scroll-overlay-y my-5">
            <div className="menu menu-column menu-rounded menu-sub-indention px-3">
              <div className="menu-item">
                <a href="/projects" className="menu-link without-sub active">
                  <span className="menu-icon">
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mh-50px"
                      >
                        <path
                          opacity="0.3"
                          d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <span className="menu-title">Projects</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link without-sub">
                  <span className="menu-icon">
                    <span className="svg-icon svg-icon-2">
                      <span className="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                            fill="currentColor"
                          ></path>
                          <rect
                            opacity="0.3"
                            x="8"
                            y="3"
                            width="8"
                            height="8"
                            rx="4"
                            fill="currentColor"
                          ></rect>
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="menu-title">Users</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
