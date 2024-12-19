export default function PatientForm() {
  return (
    <div className="p-7 border-2 rounded-3xl bg-white mx-auto">
      <div className="flex items-center justify-center gap-5 text-sm">
        <div>Basic Details</div>
        <div>Legal Documents</div>
        <div>Demographics</div>
      </div>
      <form>
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
                    name="firstName"
                    placeholder="Enter"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="relative">
                  Last name
                  <span className="absolute text-xs -top-[1px]">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mobileNo" className="relative">
                  Mobile no
                  <span className="absolute text-xs -top-[1px]">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="mobileNo"
                    placeholder="Enter"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="altMobileNo" className="relative">
                  Alternate Mobile no
                </label>
                <div>
                  <input
                    type="text"
                    name="altMobileNo"
                    placeholder="Enter"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="relative">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dob" className="relative">
                  Date of birth
                </label>
                <div>
                  <input
                    type="date"
                    name="dob"
                    placeholder="DD/MM/YYYY"
                    className="px-2 border-2 rounded-lg h-10 placeholder:uppercase"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="relative">
                  Age
                  <span className="absolute text-xs -top-[1px]">*</span>
                </label>
                <div>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter (Number only)"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="birthTime" className="relative">
                  Birth time
                  <span className="absolute text-xs -top-[1px]">*</span>
                </label>
                <div>
                  <input
                    type="time"
                    name="birthTime"
                    placeholder="00:00"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="relative">
                  Gender
                  <span className="absolute text-xs -top-[1px]">*</span>
                </label>
                <div className="space-x-10">
                  <input
                    type="radio"
                    name="male"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                  <input
                    type="radio"
                    name="female"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                  <input
                    type="radio"
                    name="others"
                    className="px-2 border-2 rounded-lg h-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guardianName" className="relative">
                  Guardian name
                </label>
                <div>
                  <input
                    type="text"
                    name="guardianName"
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
                    name="country"
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
                    name="state"
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
                    name="district"
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
                    name="city"
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
                    name="fullAddress"
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
            <div className="mt-3 ">
              <label htmlFor="knowUs" className="relative">
                How do you know about us
              </label>
              <div>
                <input
                  type="text"
                  name="knowUs"
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
                  name="referFrom"
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
              <label htmlFor="voluntary" className="relative">
                Voluntary
              </label>
              <div className="space-x-10">
                <input
                  type="radio"
                  name="voluntary"
                  className="px-2 border-2 rounded-lg h-10"
                />
                <input
                  type="radio"
                  name="inVoluntary"
                  className="px-2 border-2 rounded-lg h-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-10">
          <button className="border-[#646e5e] border-2 rounded-full px-8 py-2">
            Save
          </button>
          <button className="bg-[#323e2a] rounded-full text-white px-8 py-2">{`Save & Continue`}</button>
        </div>
      </form>
    </div>
  );
}
