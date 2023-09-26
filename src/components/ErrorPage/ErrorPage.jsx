import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-7xl font-extrabold text-center mt-24 mb-10">Oopes !!!</h2>
            <button className="btn text-center bg-[#FF444A] text-white font-semibold"><Link to="/">Go Back</Link> </button>
        </div>
    );
};

export default ErrorPage;