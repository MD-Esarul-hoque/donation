import { useEffect, useState } from "react";


import { useLoaderData } from "react-router-dom";
import { getStorageJob } from "../Utility/Utility";
import Plist from "../Plist/Plist";

const PchStore = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs]=useState([]);
    
   
   
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
        <div>
            
            {
                appliedJobs.map(pList=><Plist key={pList.id} pList={pList}></Plist>
                )
            }

            
        </div>
    );
};

export default PchStore;