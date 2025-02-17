import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-2xl font-semibold mt-4 text-gray-900">Oops! Page not found.</h1>
            <p className="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
            <button className="mt-6 px-6 py-2 text-white  bg-red-600 rounded-lg hover:bg-red-700" onClick={() => navigate("/")}>Go home</button>
        </div>
    )
}

export default PageNotFound