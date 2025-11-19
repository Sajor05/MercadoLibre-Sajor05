import { Credentials_Header } from "../sign_header/Credentials_Header";

export function Register() {
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
