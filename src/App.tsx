import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from './pages/dashboard/Dashboard.tsx'
import AppRoutes from "./router/AppRoutes.tsx";

function App() {

  return (
    <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
