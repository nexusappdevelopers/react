const CompanyReview = () => {
  return (
    <div className="mt-3 pt-md-3 p-3 text-center">
      <img src="/static/img/review-company-img.svg" alt="" />

      <h6 className="fs-18 fw-semibold px-7 mt-4">
        Your application is under review. Meanwhile, please complete your
        profile by creating your services portfolio.
      </h6>
      <div className="my-5">
        <button className="btn fw-semibold py-2 rounded-1 shadow bg-dark-background text-light fs-14">
          Edit Profile
        </button>
        <button className=" fw-semibold py-2 px-3 ms-4 primary-text fs-14 service-btn">
          Services
        </button>
      </div>
    </div>
  );
};

export default CompanyReview;
