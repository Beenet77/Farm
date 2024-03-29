import React from "react";

const ButtonPrimary = (props) => {
  return (
    <button
      {...props}
      type="submit"
      className="inline-block rounded bg-[#09B10C] hover:opacity-90 px-4 py-2 text-sm font-medium text-white  active:bg-[#09b10cda]"
    >
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
