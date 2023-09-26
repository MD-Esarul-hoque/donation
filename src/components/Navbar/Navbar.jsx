import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="flex-1">
                    <img className="h-16 w-52" src="https://i.ibb.co/TRNkGd2/Logo.png" alt=""  />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a ><NavLink to="/home" className="text-lg font-normal">Home</NavLink></a></li>
                    <li><a>
                        <NavLink to="/donation" className="text-lg font-normal">Donation</NavLink></a>
                    </li>
                   
                    <li><a><NavLink to="/Statistic" className="text-lg font-normal">Statistics</NavLink></a></li>
                    </ul>
                </div>
</div>
        </div>
    );
};

export default Navbar;