import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Header from "~/components/layout/Header";

const FirstLogin: NextPage = () => {
  return (
    <div>
      <h1 className="text-center">Thank you for choosing QuarterMaster!</h1>
      <div className="">
        Create a household to get started!
        <Link href="/first-login/createHousehold">
          <button className="btn btn-primary">Create Household</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstLogin;
