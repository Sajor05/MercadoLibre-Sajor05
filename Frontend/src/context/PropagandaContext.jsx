import { useAuth } from "./AuthContext";
import { Related_history } from "../components/carousel/lastSeen_carousel/Related_history";
import { DoublePropagandaContainer } from "../pages/Home/components/doubleContainer/DoublePropagandaContainer";

const NotIsAuthenticatedPropaganda = () => {
    return(
        <>
          <DoublePropagandaContainer/>
        </>
    );
}

const IsAuthenticatedPropaganda = () => {
    return(
        <>
          <Related_history/>
        </>
    );
}

export const DoublePropagandaContext = () => {
  const {isAuthenticated} = useAuth();

  return (
    <section>
        {isAuthenticated ? (
          <IsAuthenticatedPropaganda/>
        ) : (
          <NotIsAuthenticatedPropaganda/>
        )}
    </section>
  );
}