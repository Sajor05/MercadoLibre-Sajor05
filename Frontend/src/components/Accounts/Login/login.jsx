import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const controlLogin = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Login</h1>
    </>
  );
}
