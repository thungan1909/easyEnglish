import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddNewLesson from "../pages/addNewLesson/AddNewLesson";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/addnew" element={<AddNewLesson/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;