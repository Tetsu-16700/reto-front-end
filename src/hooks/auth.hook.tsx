import { useNavigate } from "react-router-dom";

export function AuthHook() {
  const navigate = useNavigate();
  function validateSession() {
    const value = window.localStorage.getItem("auth");

    if (!value || value !== "authenticated") {
      navigate("/login");
    }
  }

  function validateSessionLogin() {
    const value = window.localStorage.getItem("auth");

    if (value && value === "authenticated") {
      navigate("/");
    }
  }

  return { validateSession, validateSessionLogin };
}
