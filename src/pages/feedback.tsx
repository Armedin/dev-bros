const Feedback = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mw-650px">
          <div className="mb-13">
            <h1 className="mb-3">Feedback Form</h1>
          </div>
          <form
            id="reponseForm"
            name="dataForm"
            action="http://localhost:8000/update/"
            method="POST"
          >
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">Project Name</span>
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="Project Name"
                name="projectInput"
              />
            </div>
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">Funding Remaining</span>
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="Funding Remaining"
                name="balanceInput"
              />
            </div>
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">Progress</span>
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="Progress"
                id="progressInput"
              />
            </div>
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">Additional Data</span>
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="..."
                id="extraDataInput"
              />
            </div>
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">Action Needed</span>
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="defaultCheck"
              />
            </div>
            <div className="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
              <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                <span className="required">User</span>
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="User"
                name="user"
              />
            </div>
            <div>
              <button
                type="submit"
                id="kt_modal_new_target_submit"
                className="btn btn-info"
              >
                <span className="indicator-label">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
