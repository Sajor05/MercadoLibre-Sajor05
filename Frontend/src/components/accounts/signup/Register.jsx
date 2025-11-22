import { useState } from "react";
import { Credentials_Header } from "../sign_header/Credentials_Header";

export function Register() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendBackend = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://mercadolibre-sajor05.onrender.com/api/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      window.location.href = "/";
    }
  };

  return (
    <>
      <Credentials_Header></Credentials_Header>
      <form onSubmit={sendBackend}>
        <h2 className="text-xl font-bold">
          Creá tu cuenta y comprá con envíos gratis
        </h2>
        {/*Email*/}
        <p className="text-sm">E-mail</p>
        <input
          type="text"
          name="email"
          onChange={handleSubmit}
          value={formData.email}
          placeholder="ejemplo@correo.com"
        />

        {/*Número*/}
        <p className="text-sm">Teléfono</p>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleSubmit}
          value={formData.phoneNumber}
          placeholder="+54"
        />

        {/*Username*/}
        <p className="text-sm">Nombre</p>
        <input
          type="text"
          name="username"
          onChange={handleSubmit}
          value={formData.username}
        />

        {/*Password*/}
        <p className="text-sm">Contraseña</p>
        <input
          type="text"
          name="password"
          onChange={handleSubmit}
          value={formData.password}
        />

        <button type="submit">Crear cuenta</button>
      </form>
    </>
  );
}
