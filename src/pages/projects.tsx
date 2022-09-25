import { useEffect, useState } from "react";
import ProjectsStatsCard from "../components/ProjectsStatsCard";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    axios.get("127.0.0.1:8000/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Projects</span>
          <span className="text-muted mt-1 fw-semibold fs-7">5 projects</span>
        </h3>
      </div>
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bold text-muted">
                <th className="min-w-200px">Project name</th>
                <th className="min-w-200px">Funding available</th>
                <th className="min-w-100px">Team assigned</th>
                <th className="min-w-200px">Progress</th>
                <th className="min-w-100px">Last Update</th>
                <th className="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectsStatsCard project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
