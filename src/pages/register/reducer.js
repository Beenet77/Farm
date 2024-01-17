export let initial = {
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export let reducer = (state, action) => {
  //   console.log(action);
  return {
    ...state,
    [action.key]: action.payload,
  };
};
