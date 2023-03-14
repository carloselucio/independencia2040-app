import React from "react";
import LoginCard from "../components/login-card";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginCard />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-65 h-65  rounded-full animate-bounce">
          <img src={require("../assets/images/only-hand.png")} />
        </div>
      </div>
    </div>
  );
};

export default Login;
