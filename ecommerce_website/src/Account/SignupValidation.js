function signValidation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  // Full Name
  if (values.name === "") {
    errors.name = "Full name should not be empty";
    console.log(values.name);
  } else {
    errors.name = "";
  }

  // Email
  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  } else {
    errors.email = "";
  }

  // Password
  if (values.password === "") {
    errors.password = "Password should not be empty";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else {
    errors.password = "";
  }

  return errors;
}

export default signValidation;
