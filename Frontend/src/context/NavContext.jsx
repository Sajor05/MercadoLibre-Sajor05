import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const NotIsAuthenticatedNav = () => {
    return(
        <>
            <li className="nav-user-menu-item">
                <Link to="/registrate">
                    Creá tu cuenta
                </Link>
            </li>
            <li className="nav-user-menu-item">
                <Link to="/iniciar-sesion" id="login">
                  Ingresá
                </Link>
            </li>
            <li className="nav-user-menu-item"> 
                <Link to="/cupones">Mis compras</Link>
            </li>
        </>
    );
}

const IsAuthenticatedNav = () => {
    const {user} = useAuth();
    
    return(
        <>
            <li>
                <p>{user.username}</p>
            </li>
            <li>
                <Link to="/registrate">
                    Favoritos
                </Link>
            </li>
            <li>
                <Link to="/cupones">Mis compras</Link>
            </li>
        </>
    );
}

export const NavContext = () => {
  const {isAuthenticated} = useAuth();

  return (
    <>
      <ul className="flex gap-4 text-[13px] text-[#333]">
          {isAuthenticated ? (
            <IsAuthenticatedNav/>
          ) : (
            <NotIsAuthenticatedNav/>
          )}
      </ul>
    </>
  );
}