const Post = () => {
  return (
    <div className="card card-flush mb-10">
      <div className="card-header pt-9">
        <div className="d-flex align-items-center">
          <div className="symbol symbol-50px me-5">
            <img
              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-5.jpg"
              className=""
              alt=""
            />
          </div>
          <div className="flex-grow-1">
            <a className="text-gray-800 text-hover-primary fs-4 fw-bold">
              Grace Logan
            </a>
            <span className="text-gray-400 d-block">25 September, 2022</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="fs-6 fw-normal text-gray-700 mb-5">
          There are two main approaches you can take to writing amazing blog
          post headlines. You can either decide on your final headline before
          outstanding you write the most of the rest of your creative post
        </div>
      </div>
    </div>
  );
};

export default Post;
