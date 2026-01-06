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
        <section className="mt-25">
          <Related_history/>
        </section>
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