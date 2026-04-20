import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
            <h1 className="text-9xl font-bold text-[#1a5c45]">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
            <p className="text-gray-500 mt-3 max-w-sm">
                Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 flex items-center gap-2 bg-[#1a5c45] text-white px-6 py-3 rounded-md hover:bg-[#154d39] transition"
            >
                🏠 Back to Home
            </button>
        </div>
    );
}

export default ErrorPage;