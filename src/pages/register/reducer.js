export let initial = {
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

export let reducer = (state, action) => {
  return {
    ...state,
    [action.key]: action.payload,
  };
};
