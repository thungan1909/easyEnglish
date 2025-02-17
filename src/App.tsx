import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes.tsx";

function App() {

  return (
    <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
