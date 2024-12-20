export type PatientFormStateType = {
  basicDetails: {
    firstName: string;
    lastName: string;
    mobileNo: string;
    altMobileNo: string;
    email: string;
    dob: string;
    age: string;
    birthTime: string;
    gender: string;
    guardianName: string;
    country: string;
    state: string;
    district: string;
    city: string;
    fullAddress: string;
    knowUs: string;
    referFrom: string;
    admissionType: string;
  };
  legalDocuments: any;
  demographics: any;
};
