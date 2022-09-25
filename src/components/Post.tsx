import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [updates, setUpdates] = useState<any[]>([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/updates")
      .then((res) => setUpdates(res.data));
  }, []);
  return (
    <>
      {updates.map((update, i) => (
        <div className="card card-flush mb-10">
          <div className="card-header pt-9">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-50px me-5">
                <img
                  src={`https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-${i}.jpg`}
                  className=""
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <a className="text-gray-800 text-hover-primary fs-4 fw-bold">
                  {update.user}
                </a>
                <span className="text-gray-400 d-block">{update.date}</span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-6 fw-normal text-gray-700 mb-5">
              {update.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
