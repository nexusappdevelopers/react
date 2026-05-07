const DownloadSection = () => {
  return (
    <div className="container-fluid p-0 m-0 bg-light download-app-section ">
      <div className="w-100 bg-light container app-content">
        <div className="row p-0 me-1 ms-2 bg-light">
          <div className="col-7 align-self-center">
            <h1 className="fw-bold fs-58">Download our</h1>
            <h1 className="fw-bold fs-58">Mobile App</h1>
            <p className="fw-semibold fs-24">
              <span className="fs-24">Your All-in-One Solution Awaits in Our App. Get Your</span><br />
               Ultimate Tool
              for Seamless Planning and Service.
            </p>
            <div className="d-flex mt-4 gap-2">
              <button className="border border-0 ">
                <img
                  src="/static/img/googlePlay.svg"
                  alt=""
                  className=" img-fluid "
                />
              </button>
              <button className="border border-0">
                <img
                  src="/static/img/appStore.svg"
                  alt=""
                  className=" img-fluid"
                />
              </button>
            </div>
          </div>
          <div className="col-5 ">
            <img
              src="/static/img/downloadAppImage.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
