import { useEffect, useState } from "react";


import { useLoaderData } from "react-router-dom";
import { getStorageJob } from "../Utility/Utility";
import DonationUser from "../DonationUser/DonationUser";


const TotalDonation = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs]=useState([]);
    const [dataLength,setDataLength]= useState(4);
   
   
    useEffect(()=>{
        const storageJobIds=getStorageJob();
        if(jobs.length>0){
            // const jobsApplied=job.filter(job=>storageJobIds.includes(job.id))
            const jobsApplied=[];
            for(const id of storageJobIds){
                const job=jobs.filter(job=>job.id===id);
                if(job){
                    jobsApplied.push(job)
                }
            } 
            setAppliedJobs(jobsApplied);
           
            
        }
    },[]);
   
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
           
        
            {
                appliedJobs.slice(0,dataLength).map(du=><DonationUser key={du.id} du={du}></DonationUser> )
            }
  
        </div>
        <div className=" text-center">
                    <div  className={dataLength===appliedJobs.length ? 'hidden':''} >
                    {appliedJobs.length >4 && <button className="btn bg-[#FF444A] text-white mx-auto my-5 " onClick={()=>setDataLength(appliedJobs.length)}>Show All</button>}
                    </div>
            </div>
        </>
    );
};

export default TotalDonation;