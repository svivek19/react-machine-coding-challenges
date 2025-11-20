const loginFormConfig = {
  field: [
    {
      name: "username",
      type: "text",
      label: "Username",
      validation: {
        required: true,
        minLength: 3,
      },
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      validation: {
        required: true,
        minLength: 6,
      },
    },
  ],
  submitButtonText: "Login",
};

export default loginFormConfig;
