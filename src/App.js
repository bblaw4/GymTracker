import React from "react";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import Status from "./components/Status";
import CurrentUsers from "./components/CurrentUsers";

export default function App() {
  return (
    <div>
      <Header title="GYM Tracker" />
      <SigninForm />
      <Status />
      <CurrentUsers />
    </div>
  );
}
