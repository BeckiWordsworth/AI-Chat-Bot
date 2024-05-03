import React, { useState, useEffect } from "react";
import { usePostLoginMutation, usePostSignUpMutation } from "@/state/api";

const index = () => {
  const [isRegister, setRegister] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };

  const handleRegister = () => {
    triggerSignUp({ username, password });
  };

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUserName(username);
      setPassword(password);
    }
  }, [resultLogin.data]); // eslint-disable-line

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">CHAT BOT APP</h2>
        <p></p>
      </div>
    </div>
  );
};

export default index;
