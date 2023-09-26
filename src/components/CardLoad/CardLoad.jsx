import { useEffect, useState } from "react";
import Card from "../../Card/Card";

import PropTypes from 'prop-types';

const CardLoad = ({results}) => {
    const[cardLoad,setCardLoad]=useState([]);
   

    useEffect(()=>{
        fetch('donate.json')
            .then(res=>res.json())
            .then(data=>setCardLoad(data));
    },[])
    
    
    
    
    
    return (
        <div>
           
            
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {
                    
                 results .map(card =><Card card={card} key={card.id}></Card>)
                    
                    
                }
                
            </div>
            <div >
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                    {
                         cardLoad.map(card =><Card card={card} key={card.id}></Card>)
                    }
                    </div>
                    {/* {
                         cardLoad.map(card =><Card card={card} key={card.id}></Card>)
                    } */}
                </div>
            </div>
            
           
        </div>
    );
};
CardLoad.propTypes={
    results:PropTypes.object,
}
export default CardLoad;