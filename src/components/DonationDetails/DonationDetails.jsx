import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Utility/Utility";


const DonationDetails = () => {
    const donations =useLoaderData();
    const {id}=useParams();
    
    const idSt=parseInt(id);
    const donation=donations.find(donation=>donation.id===idSt);
    const handleApplyJob=()=>{
        saveDonation(idSt);
        toast('Your are Donations successfully')
        
        
    }
    

    return (
        <div>
            
            <div className=" h-[800px]  mt-10 rounded-md">
                
                    <div >
                        <img src={donation.desImage} alt="" className="relative md:h-[400px] lg:h-[500px] h-[300px]  w-[1370px]  rounded-md   " />
                    </div>
                    <div className=" bg-black  -mt-20 py-4  rounded-b-md bg-blend-overlay bg-opacity-30 pl-10 absolute w-[295px] lg:w-[1093px] md:w-[640px]">
                            <button style={{backgroundColor:donation.colorTitle}} className="btn  text-xl font-semibold  text-white normal-case border-none" onClick={handleApplyJob}>Donate ${donation.price}</button>
                    </div>
                    <div>
                        <h3 className="font-bold text-4xl my-5">{donation.title}</h3>
                        <p className="font-normal text-sm text-justify mb-10">{donation.description}</p>
                    </div>
               
            </div>
            <ToastContainer  />
        </div>
    );
};

export default DonationDetails;