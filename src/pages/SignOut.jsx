import { useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("login");
    // localStorage.removeItem("password");
    navigate("/");
  }, [navigate]);

  return (
    <section className="flex flex-col gap-y-4 justify-center items-center w-screen h-screen text-black">
      <p className="text-xl font-bold text-black">Signing you out...</p>
      <ActionButton onClick={() => navigate("/")}> Go to Login</ActionButton>
    </section>
  );
}

export default SignOut;
