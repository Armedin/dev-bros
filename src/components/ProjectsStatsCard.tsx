const ProjectsStatsCard = ({
  project,
  location,
}: {
  project: any;
  location: string;
}) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="symbol symbol-45px me-5">
            <span className="symbol-label bg-light-danger text-danger fw-bolder">
              P{project.name.slice(-1)}
            </span>
          </div>
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bold text-hover-info fs-6">
              {project.name}
            </div>
            <span className="text-muted text-muted d-block fs-7">
              Birmingham
            </span>
          </div>
        </div>
      </td>
      <td>
        <div className="text-dark fs-5">
          <span className="me-2 fw-bold">
            £{parseInt(project.funding_remaining).toLocaleString()}
          </span>
          <span className="fs-7">
            / £{parseInt(project.funding_start).toLocaleString()}
          </span>
        </div>
      </td>
      <td>
        <div className="symbol-group symbol-hover">
          <div className="symbol symbol-30px symbol-circle">
            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
          </div>
          <div className="symbol symbol-30px symbol-circle">
            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-8.jpg" />
          </div>
          <div className="symbol symbol-30px symbol-circle">
            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-7.jpg" />
          </div>
        </div>
      </td>
      <td className="text-end">
        <div className="d-flex flex-column w-100 me-2">
          <div className="d-flex flex-stack mb-2">
            <span className="text-muted me-2 fs-7 fw-bold">
              {project.progress}%
            </span>
          </div>
          <div className="progress h-6px w-100">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: project.progress + "%" }}
            ></div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-gray-700 fw-bold">Sept 25, 2022</span>
      </td>
      <td>
        <span
          className={`badge badge-light-${
            project.action_required ? "danger" : "success"
          } me-auto`}
        >
          {project.action_required ? "Yes" : "No"}
        </span>
      </td>
      <td>
        <div className="d-flex justify-content-end flex-shrink-0">
          <a
            href="/project/a53319c004ca8636f"
            className="btn btn-icon btn-bg-light btn-active-color-info btn-sm me-2"
          >
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
                  d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <a className="btn btn-icon btn-bg-light btn-active-color-info btn-sm">
            <span className="svg-icon svg-icon-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.5"
                  d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.5"
                  d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ProjectsStatsCard;
