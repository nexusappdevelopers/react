import FormFieldError from "../../components/formFieldError";
import * as AppConstants from "../../utilities/constants";
import { useForm } from "react-hook-form";
const CompanyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const handleSignIn = (data: any) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log(payload)
  };
  return (
    <form className="mt-3 pt-md-3 p-3" onSubmit={handleSubmit(handleSignIn)}>
      <div className="mb-3 ">
        <label
          htmlFor="email"
          className="form-label fs-14 fw-semibold light-primary-color"
        >
          Company logo
        </label>
        <div className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow">
          <label htmlFor="file-upload" className="file-upload-btn">
            Choose File
          </label>
          <input type="file" id="file-upload" className="file-input" />
          <span id="file-name">No File Chosen</span>
        </div>

        {errors.email?.type === "required" && (
          <FormFieldError message={AppConstants.requiredField} />
        )}
        {errors.email?.type === "pattern" && (
          <FormFieldError message={AppConstants.notValidEmail} />
        )}
      </div>
      <div className="mb-3 d-flex gap-4">
        <div className="w-50">
          <label
            htmlFor="firstName"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            First Name*
          </label>

          <input
            id="firstName"
            {...register("firstName", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
        </div>
        <div className="w-50">
          <label
            htmlFor="lastName"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Last Name*
          </label>

          <input
            id="lastName"
            {...register("lastName", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
          {errors.email?.type === "pattern" && (
            <FormFieldError message={AppConstants.notValidEmail} />
          )}
        </div>
      </div>
      <div className="mb-3 d-flex gap-4">
        <div className="w-50">
          <label
            htmlFor="email"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Email*
          </label>

          <input
            id="email"
            {...register("email", {
              required: true,
              pattern:
                /^(?!.*\.com\.com)(?!.*\.\.)(?!.*\.\.)(?!^[._%+-])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
          {errors.email?.type === "pattern" && (
            <FormFieldError message={AppConstants.notValidEmail} />
          )}
        </div>
        <div className="w-50">
          <label
            htmlFor="phone"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Phone*
          </label>

          <input
            id="phone"
            {...register("phone", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
          {errors.email?.type === "pattern" && (
            <FormFieldError message={AppConstants.notValidEmail} />
          )}
        </div>
      </div>
      <div className="mb-3 d-flex gap-4">
        <div className="w-50">
          <label
            htmlFor="designation"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Designation*
          </label>

          <input
            id="designation"
            {...register("designation", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
        </div>
        <div className="w-50">
          <label
            htmlFor="businessName"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Business name as per Trade License*
          </label>

          <input
            id="businessName"
            {...register("businessName", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
          {errors.email?.type === "pattern" && (
            <FormFieldError message={AppConstants.notValidEmail} />
          )}
        </div>
      </div>
      <div className="mb-3 d-flex gap-4">
        <div className="w-50">
          <label
            htmlFor="selectState"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Select State*
          </label>

          <input
            id="firstName"
            {...register("firstName", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
        </div>
        <div className="w-50">
          <label
            htmlFor="aadhaarId"
            className="form-label fs-14 fw-semibold light-primary-color"
          >
            Aadhaar card Id *
          </label>

          <input
            id="aadhaarId"
            {...register("aadhaarId", {
              required: true,
            })}
            type="text"
            className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow"
          />
          {errors.email?.type === "required" && (
            <FormFieldError message={AppConstants.requiredField} />
          )}
          {errors.email?.type === "pattern" && (
            <FormFieldError message={AppConstants.notValidEmail} />
          )}
        </div>
      </div>
      <div className="mb-3 ">
        <label
          htmlFor="email"
          className="form-label fs-14 fw-semibold light-primary-color"
        >
          Aadhaar card Id *
        </label>
        <div className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow">
          <label htmlFor="file-upload" className="file-upload-btn">
            Choose File
          </label>
          <input type="file" id="file-upload" className="file-input" />
          <span id="file-name">No File Chosen</span>
        </div>

        {errors.email?.type === "required" && (
          <FormFieldError message={AppConstants.requiredField} />
        )}
        {errors.email?.type === "pattern" && (
          <FormFieldError message={AppConstants.notValidEmail} />
        )}
      </div>
      <div className="mb-3 ">
        <label
          htmlFor="email"
          className="form-label fs-14 fw-semibold light-primary-color"
        >
          Upload Trade License *
        </label>
        <div className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow">
          <label htmlFor="file-upload" className="file-upload-btn">
            Choose File
          </label>
          <input type="file" id="file-upload" className="file-input" />
          <span id="file-name">No File Chosen</span>
        </div>

        {errors.email?.type === "required" && (
          <FormFieldError message={AppConstants.requiredField} />
        )}
        {errors.email?.type === "pattern" && (
          <FormFieldError message={AppConstants.notValidEmail} />
        )}
      </div>
      <div className="mb-3 ">
        <label
          htmlFor="email"
          className="form-label fs-14 fw-semibold light-primary-color"
        >
          Upload company profile*
        </label>
        <div className="form-control shadow-none py-2 rounded-3  border-grey box-shadow focus-shadow">
          <label htmlFor="file-upload" className="file-upload-btn">
            Choose File
          </label>
          <input type="file" id="file-upload" className="file-input" />
          <span id="file-name">No File Chosen</span>
        </div>

        {errors.email?.type === "required" && (
          <FormFieldError message={AppConstants.requiredField} />
        )}
        {errors.email?.type === "pattern" && (
          <FormFieldError message={AppConstants.notValidEmail} />
        )}
      </div>
      <div className="w-100 text-end mt-5 mb-3">
        <button
          className="btn fw-semibold py-2
                       rounded-1 shadow bg-dark-background text-light px-5"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default CompanyProfile;
