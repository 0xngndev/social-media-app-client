import { useRouter } from "next/router";
import Router from "next/router";

const Logout = () => {
  const router = useRouter();
  const closeSession = () => {
    localStorage.removeItem("token");
    router.push("/");
    Router.events.on("routeChangeComplete", () => {
      Router.reload();
    });
  };

  return (
    <>
      <h3 onClick={closeSession}>LOGOUT</h3>
    </>
  );
};

export default Logout;
