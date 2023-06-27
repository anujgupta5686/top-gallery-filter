import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center w-full h-[100vh]">
      <div class="custom-loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
