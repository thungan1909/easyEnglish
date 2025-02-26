import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerGlobalNavigate } from "./globalNavigate";

const GlobalNavigationRegister = () => {
  const navigate = useNavigate();

  useEffect(() => {
    registerGlobalNavigate(navigate);
  }, [navigate]);

  return null;
};

export default GlobalNavigationRegister;
