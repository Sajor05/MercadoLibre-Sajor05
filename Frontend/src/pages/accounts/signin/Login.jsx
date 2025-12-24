import "./login.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Credentials_Navbar } from "../../../components/Extends/credentialsNavbar/Credentials_Navbar";

export function Login() {
  const 
    { register, 
    handleSubmit, 
    formState : {errors }} = useForm();
  const {signin, isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
          signin(values)
        })
  useEffect(() => {
    if (isAuthenticated) navigate("/")
  },[isAuthenticated])

  return (
    <>
      <Credentials_Navbar/>
      <main className="grid grid-cols-2 px-15 pl-50">
        <div>
          <h2 className="text-4xl font-bold mt-15">
            Ingresá tu e-mail o teléfono <br />para iniciar sesión
          </h2>
          <div>
            <button className="cursor-pointer text-sm mt-50">
              Tengo un problema de seguridad
              <span> icono</span>
            </button>
          </div>
        </div>
        <div className="w-7/12 mt-15 bg-white pl-8 py-8 border-1 border-zinc-300 rounded-xl">
          <form id="login-form" onSubmit={onSubmit}>
            <p className="text-sm px-1.5 text-zinc-900">E-mail o teléfono</p>
            <input
              type="text"
              {...register("email",{required:true})}
              className="w-11/12 mt-0.5 border-1 border-zinc-300 rounded-sm p-2.5"
            />
            <br />
            <input
              type="password"
              placeholder="Contraseña..."
              {...register("password",{required:true})}
              className="w-11/12 border-1 border-zinc-300 rounded-sm p-2.5 mt-4"
            />
            <button 
              type="submit" 
              className="
                mt-4
                h-12 
                w-11/12
                cursor-pointer 
                text-white font-bold 
                bg-blue-500 
                p-2 
                rounded-sm
                transition-all
                hover:bg-blue-600
              ">
              Continuar
            </button>           
          </form>
            
            <li className="
                text-center
                list-none
                mt-3
                h-12 
                w-11/12
                cursor-pointer 
                text-blue-500
                font-bold
                bg-white 
                p-3
                rounded-sm
                transition-all
                hover:bg-blue-50
            ">
              <Link to="/registrate">Crear cuenta</Link>
            </li>
            <hr className="text-gray-400 mt-3" /><p>o</p>                     
        </div>
      </main>
    </>
  );
}
