import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientFormStateType } from "../../types/store.types";

export const initialState: PatientFormStateType = {
  basicDetails: {
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
  },
  legalDocuments: {},
  demographics: {},
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setBasicDetails: (
      state,
      action: PayloadAction<PatientFormStateType["basicDetails"]>
    ) => {
      state.basicDetails = action.payload;
    },
    setLegalDocuments: (
      state,
      action: PayloadAction<PatientFormStateType["legalDocuments"]>
    ) => {
      state.legalDocuments = action.payload;
    },
    setDemographics: (
      state,
      action: PayloadAction<PatientFormStateType["demographics"]>
    ) => {
      state.demographics = action.payload;
    },
    resetPatientForm: () => {
      return initialState;
    },
  },
});

export const {
  setBasicDetails,
  setLegalDocuments,
  setDemographics,
  resetPatientForm,
} = patientSlice.actions;
export default patientSlice.reducer;
