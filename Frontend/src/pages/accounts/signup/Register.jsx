import "./Register.css"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Credentials_Navbar } from "../../../components/Extends/credentialsNavbar/Credentials_Navbar";

export function Register() {
  const 
  { register, 
    handleSubmit, 
    formState : {errors }} = useForm();
  const {signup, isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
          signup(values)
        })
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (isAuthenticated) navigate("/")
  },[isAuthenticated])


  return (
    <>
      <Credentials_Navbar/>
      <div className="back_ground p-12">
        <h2 className="mt-10 text-4xl font-bold text-center">
          Creá tu cuenta y comprá con envíos gratis
        </h2>
      </div>
      <div className="main-container mt-12 flex justify-center">
        <form id="register-form" onSubmit={onSubmit} 
        className="bg-white text-center p-8 w-[600px] rounded-sm">

          {/*Email*/}
          <div className="text-justify ml-5">
            <p className="text-sm">E-mail</p>
            <input
              className="p-3 h-13 w-[400px] rounded-sm"
              type="text"
              {...register("email",{required:true})}
              name="email"
              placeholder="ejemplo@correo.com"
            />
            {
              errors.email && <p className="text-red-500 text-sm">Ingresá tu e-mail.</p>
            }            
          </div>



          {/*Número*/}

          <div className="text-justify ml-5 mt-4">
            <p className="text-sm">Teléfono</p>
            <input
              className="p-3 h-13 w-[400px] rounded-sm"
              type="text"
              {...register("phoneNumber",{required:true})}
              name="phoneNumber"
              placeholder="+54"
            />
            {
              errors.phoneNumber && <p className="text-red-500 text-sm">Ingresá tu número de teléfono.</p>
            }
          </div>


          {/*Username*/}

          <div className="text-justify ml-5 mt-4">
            <p className="text-sm">Nombre</p>
            <input
              className="p-3 h-13 w-[400px] rounded-sm"
              type="text"
              {...register("username",{required:true})}
              name="username"
            />
            {
              errors.username && <p className="text-red-500 text-sm">Ingresá tu nombre.</p>
            }
          </div>



          {/*Password*/}

          <div className="text-justify ml-5 mt-4">
            <p className="text-sm">Contraseña</p>
            <input
              className="p-3 h-13 w-[400px] rounded-sm"
              type="password"
              {...register("password",{required:true})}
              name="password"
            />
            {
              errors.email && <p className="text-red-500 text-sm">Ingresá una contraseña</p>
            }
          </div>

          <br />
          <button 
            type="submit" 
            className="
              mt-4
              w-11/12
              cursor-pointer 
              text-white font-bold 
              bg-blue-500 
              p-2 
              rounded-xl
              transition-all
              hover:bg-blue-600
              ">
              Continuar
              </button>
        </form>     
      </div>

      
    </>
  );
}
