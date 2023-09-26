import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';






const Pchart = ({priceCh}) => {
    const{price,colorBg,title}=priceCh;
    
    
    
    let total=3450;
    
    
    let sum=0;
    
    sum +=price;
       
    let result=(sum/total)*100;
    let totalPrice=(total/total)*100;
   
    

    return (
        
        <div className=' h-[180px] lg:h-[350px] md:h-[250px] lg:w-[1000px] justify-center mt-14 mb-5'>
            <PieChart
                data={[
                    { title: 'Donation', value: totalPrice, color: '#FF444A' },
                    { title: title, value: result, color: colorBg },
                    
                ]}
                labelStyle={() => ({
                    fill: 'white',
                    fontSize: '5px',
                    fontFamily: 'inter',
                  })}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                
                
            />
           <div className='justify-center flex gap-4 my-2'>
           <h3 className='font-normal md:text-sm text-xs '> Your Donation : <progress  className="progress w-32 progress-info  " value={result}   max="100" ></progress></h3>
                <h3  className='font-normal md:text-sm text-xs '> Your Donation : <progress style={{color:'#FF444A'}} className="progress w-32 progress-error " value={totalPrice}   max="100" ></progress></h3>
                
            </div> 

            
        </div>
    );
};
Pchart.propTypes={
    priceCh:PropTypes.object,
}
export default Pchart;




