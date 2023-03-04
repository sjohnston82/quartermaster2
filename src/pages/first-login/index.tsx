import React from "react";
import Header from "~/components/layout/Header";

const FirstLogin = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center">Thank you for choosing QuarterMaster!</h1>
      <div className="">
        Create a household to get started!
        <button className="btn btn-primary">Create Household</button>
      </div>
    </div>
  );
};

export default FirstLogin;
