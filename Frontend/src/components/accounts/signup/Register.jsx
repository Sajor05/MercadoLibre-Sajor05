import { useState } from "react";
import { Credentials_Header } from "../sign_header/Credentials_Header";

export function Register() {
  const [formData, setFormData] = useState({
    email: "",
    telefono: "",
    nombre: "",
    contraseña: "",
  });

  const handleSubmit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendBackend = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mercadolibre-sajor05.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      <Credentials_Header></Credentials_Header>
      <div>
        <h2 className="text-xl font-bold">
          Creá tu cuenta y comprá con envíos gratis
        </h2>
      </div>
      <p className="text-sm">E-mail</p>
      <input type="text" placeholder="ejemplo@correo.com" />

      <p className="text-sm">Teléfono</p>
      <input type="text" placeholder="+54" />

      <p className="text-sm">Nombre</p>
      <input type="text" />

      <p className="text-sm">Contraseña</p>
      <input type="text" />
    </>
  );
}
