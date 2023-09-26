import CardLoad from '../CardLoad/CardLoad';
import Banner from '../Banner/Banner';
import { useState } from 'react';


const Home = () => {
    const[results,setResults]=useState([]);
    return (
        <div>
            <Banner setResults={setResults}></Banner>
            <CardLoad results={results}></CardLoad>
        </div>
    );
};

export default Home;