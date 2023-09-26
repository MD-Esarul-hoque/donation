import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className=" mx-10 md:mx-16 lg:mx-32 mt-5 md:mt-10 mb-20 " >
           <Navbar></Navbar>
           
           <Outlet></Outlet>
        </div>
        
    );
};

export default Root;