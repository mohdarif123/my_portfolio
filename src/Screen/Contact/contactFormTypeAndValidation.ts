import strings from "../../global/constants/StringConstants";

export const contactFormInitialState = () => {
  return {
    name: {
      value: "",
      error: "",
    },
    number: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
  };
};

export const validateForContactForm = (contactFormData: any) => {
  let errors = contactFormData;
  let isValid = true;
  const name = contactFormData!.name.value;
  const number = contactFormData!.number.value;
  const email = contactFormData?.email?.value;
  const description = contactFormData?.description?.value;

  if (!name && !number && !email && !description) {
    // Set the fields as error true
    errors!.name.error = "Please enter name!";
    errors!.number.error = "Please enter number!";
    errors!.email.error = "Please enter email!";
    errors!.description.error = "Please enter description!";
    isValid = false;
  }
  if (!name && !number && !email && !description) {
    // Set the fields as error true
    errors!.name.error = "Please enter name!";
    errors!.number.error = "Please enter number!";
    errors!.email.error = "Please enter email!";
    errors!.description.error = "Please enter description!";
    isValid = false;
  }
  if (!name) {
    // Set the fields as error true
    errors!.name.error = "Please enter name!";
    isValid = false;
  }
  if (!number) {
    // Set the fields as error true
    errors!.number.error = "Please enter number!";
    isValid = false;
  }

  if (!email) {
    errors!.email.error = "Please enter email!";
    isValid = false;
  }
  if(strings.regex.test(email)){
    errors!.email.error = "Please enter valid email!";
    isValid = false;
  }
  if (!description) {
    errors!.description.error = "Please enter description!";
    isValid = false;
  }
  return { isValid, errors } as any;
};
