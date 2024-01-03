import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-500">Oops!</h1>
          <h1 className="text-3xl font-bold text-slate-700">Page not Found</h1>
          <Link to={`/`}>
          <button className="btn btn-secondary mt-4">Go Home</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;