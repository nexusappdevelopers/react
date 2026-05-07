import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
     const navigate = useNavigate();
  return (
    <div className="container-fluid  ">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <img src="/static/img/PageNotFound.svg" alt="" />
        <h1 className="primary-text fs-36 fw-bold mt-2">
          Something went wrong.
        </h1>
        <button
          type="submit"
          className="btn fw-semibold py-2 rounded-1 shadow bg-dark-background text-light px-3 mt-4"
          onClick={()=> navigate("/dashboard")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
