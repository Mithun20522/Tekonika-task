import { useForm } from "react-hook-form";
import FormActionButtons from "./ActionButtons";
const defaultValues = {
  firstName: "",
  lastName: "",
  mobileNo: "",
  altMobileNo: "",
  email: "",
  dob: "",
  age: "",
  birthTime: "",
  gender: "",
  guardianName: "",
  country: "India",
  state: "",
  district: "",
  city: "",
  fullAddress: "",
  knowUs: "",
  referFrom: "",
  admissionType: "",
};

export default function BasicDetailsForm({
  onSubmit,
  onSave,
  activeStep,
}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-semibold mt-5">Patient Details</h1>
        <div className="mt-3">
          <div className="max-w-7xl grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <label htmlFor="firstName" className="relative">
                First name
                <span className="absolute text-xs -top-[1px]">*</span>
              </label>
              <div>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter valid name",
                    },
                  })}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="relative">
                Last name
                <span className="absolute text-xs  -top-[1px]">*</span>
              </label>
              <div>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter valid name",
                    },
                  })}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="mobileNo" className="relative">
                Mobile no
                <span className="absolute text-xs  -top-[1px]">*</span>
              </label>
              <div>
                <input
                  type="tel"
                  {...register("mobileNo", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter valid 10-digit number",
                    },
                  })}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.mobileNo && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNo.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="altMobileNo" className="relative">
                Alternate Mobile no
              </label>
              <div>
                <input
                  type="tel"
                  {...register("altMobileNo", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter valid 10-digit number",
                    },
                  })}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.altMobileNo && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.altMobileNo.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="relative">
                Email
              </label>
              <div>
                <input
                  type="email"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter valid email",
                    },
                  })}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="relative">
                Date of birth
              </label>
              <div>
                <input
                  type="date"
                  {...register("dob")}
                  placeholder="DD/MM/YYYY"
                  className="px-2 border-2 rounded-lg h-10 placeholder:uppercase"
                />
              </div>
            </div>

            <div>
              <label htmlFor="age" className="relative">
                Age
                <span className="absolute text-xs  -top-[1px]">*</span>
              </label>
              <div>
                <input
                  type="number"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 0, message: "Age must be positive" },
                    max: { value: 150, message: "Please enter valid age" },
                  })}
                  placeholder="Enter (Number only)"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.age && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.age.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="birthTime" className="relative">
                Birth time
                <span className="absolute text-xs  -top-[1px]">*</span>
              </label>
              <div>
                <input
                  type="time"
                  {...register("birthTime", {
                    required: "Birth time is required",
                  })}
                  placeholder="00:00"
                  className="px-2 border-2 rounded-lg h-10"
                />
                {errors.birthTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.birthTime.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="relative">
                Gender
                <span className="absolute text-xs  -top-[1px]">*</span>
              </label>
              <div className="space-x-10">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("gender", {
                      required: "Please select gender",
                    })}
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("gender", {
                      required: "Please select gender",
                    })}
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("gender", {
                      required: "Please select gender",
                    })}
                    value="other"
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="guardianName" className="relative">
                Guardian name
              </label>
              <div>
                <input
                  type="text"
                  {...register("guardianName")}
                  placeholder="Enter Full Name"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="relative">
                Country
              </label>
              <div>
                <input
                  type="text"
                  {...register("country")}
                  placeholder="India"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="state" className="relative">
                State
              </label>
              <div>
                <input
                  type="text"
                  {...register("state")}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="district" className="relative">
                District
              </label>
              <div>
                <input
                  type="text"
                  {...register("district")}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="relative">
                City
              </label>
              <div>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fullAddress" className="relative">
                Full Address
              </label>
              <div>
                <input
                  type="text"
                  {...register("fullAddress")}
                  placeholder="Enter"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold mt-5">Reference</h1>
        <div className="max-w-7xl grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mt-3">
            <label htmlFor="knowUs" className="relative">
              How do you know about us
            </label>
            <div>
              <input
                type="text"
                {...register("knowUs")}
                placeholder="Select"
                className="px-2 border-2 rounded-lg h-10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="referFrom" className="relative">
              Refer from
            </label>
            <div>
              <input
                type="text"
                {...register("referFrom")}
                placeholder="Select"
                className="px-2 border-2 rounded-lg h-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold mt-5">Admission Type</h1>
        <div className="mt-3">
          <div>
            <label className="relative block">
              <div className="space-x-10">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("admissionType")}
                    value="voluntary"
                    className="mr-2"
                  />
                  Voluntary
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("admissionType")}
                    value="involuntary"
                    className="mr-2"
                  />
                  Involuntary
                </label>
              </div>
            </label>
          </div>
        </div>
      </div>
      <FormActionButtons
        onSave={handleSubmit(onSave)}
        onContinue={handleSubmit(onSubmit)}
        isLastStep={activeStep === 2}
      />
    </form>
  );
}
