import { useState } from "react";
import PropTypes from 'prop-types';


const Banner = ({setResults}) => {
    const [input,setInput]=useState("");
    const fetchData=(value)=>{
        fetch('/public/donate.json')
        .then(res=>res.json())
        .then((json)=>{
            const results=json.filter(user=>{
                
                
                
                return value && user && user.title && user.title.toLowerCase().includes(value)
                
            })
            setResults(results);
        })
    }
    
    const handleInput=(value)=>{
        
        setInput(value);
        fetchData(value);
        
    }
    

    return (
        <div>
            <div className="hero w-[300px] md:w-full md:h-[400px] lg:h-[500px] rounded-xl md:my-10 my-5" style={{backgroundImage: 'url(https://i.ibb.co/9cTKvtg/Clothing.png)'}}>
                <div className="hero-overlay bg-opacity-70 bg-slate-100 rounded-xl"></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="">
                    <h1 className="mb-6 md:text-5xl text-xl font-bold text-black">I Grow By Helping People In Need</h1>
                    
                    <div className="form-control ">
                        
                        <label className="input-group justify-center">
                            <input type="text" placeholder="Search here ...." value={input} onChange={(e)=>handleInput(e.target.value)} className="input input-bordered md:w-96 w-44 text-lg font-medium text-black" />
                            <span className="font-semibold text-base text-white bg-[#FF444A]">Search</span>
                        </label>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
Banner.propTypes={
    setResults:PropTypes.object,
}
export default Banner;