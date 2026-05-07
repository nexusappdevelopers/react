const SelectService = () => {
  return (
    <form className="pt-md-3 p-3 row gap-2">
      <div className="col mt-3 ">
        <label className="custom-radio-wrapper shadow-sm d-flex align-items-center justify-content-between box-shadow focus-shadow">
          <div className="icon-wrapper">
            <span className="icon">🚗</span>
          </div>
          <span className="label-text">Lorem Ipsum</span>
          <input type="radio" name="option" className="radio-input" />
          <span className="custom-radio"></span>
        </label>
      </div>
      <div className="col mt-3 ">
        <label className="custom-radio-wrapper shadow-sm d-flex align-items-center justify-content-between box-shadow focus-shadow">
          <div className="icon-wrapper">
            <span className="icon">🚗</span>
          </div>
          <span className="label-text">Lorem Ipsum</span>
          <input type="radio" name="option" className="radio-input" />
          <span className="custom-radio"></span>
        </label>
      </div>
      <div className="col mt-3 ">
        <label className="custom-radio-wrapper shadow-sm d-flex align-items-center justify-content-between box-shadow focus-shadow">
          <div className="icon-wrapper">
            <span className="icon">🚗</span>
          </div>
          <span className="label-text">Lorem Ipsum</span>
          <input type="radio" name="option" className="radio-input" />
          <span className="custom-radio"></span>
        </label>
      </div>
      <div className="col mt-3 ">
        <label className="custom-radio-wrapper shadow-sm d-flex align-items-center justify-content-between box-shadow focus-shadow">
          <div className="icon-wrapper">
            <span className="icon">🚗</span>
          </div>
          <span className="label-text">Lorem Ipsum</span>
          <input type="radio" name="option" className="radio-input" />
          <span className="custom-radio"></span>
        </label>
      </div>
      <div className="w-100 text-end mt-5 mb-3">
        <button
          className="btn fw-semibold py-2
                       rounded-1 shadow bg-dark-background text-light fs-14"
          type="submit"
        >
          Submit For Review
        </button>
      </div>
    </form>
  );
};

export default SelectService;
