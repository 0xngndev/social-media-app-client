import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const closeSession = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      <h3 onClick={closeSession}>LOGOUT</h3>
    </>
  );
};

export default Logout;
