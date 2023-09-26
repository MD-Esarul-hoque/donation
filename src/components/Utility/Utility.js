const getStorageJob=()=>{
    const storageJob=localStorage.getItem('job-Application');
    if(storageJob){
        return JSON.parse(storageJob);
    }
    return [];
}

const saveDonation=id=>{
    const storageJobs=getStorageJob();
    const exists=storageJobs.find(jobId=>jobId===id);
    if(!exists){
        storageJobs.push(id);
        localStorage.setItem('job-Application',JSON.stringify(storageJobs
            ))
    }
}
export {saveDonation,getStorageJob}