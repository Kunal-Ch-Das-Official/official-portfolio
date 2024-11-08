const showHidePasswordHandler = (target: string) => {
  const getPassword = document.getElementById(target);

  if (getPassword instanceof HTMLInputElement) {
    getPassword.type = getPassword.type === "password" ? "text" : "password";
  }
};

export default showHidePasswordHandler;
