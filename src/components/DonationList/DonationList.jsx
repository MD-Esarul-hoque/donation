
import PropTypes from 'prop-types';



const DonationList = ({list}) => {
    const{desImage,title,cardName,colorTitle,colorTitleBg,colorBg,price}=list;
    
    return (
        <div>
             <div style={{backgroundColor:colorTitleBg}} className="card card-compact    shadow-xl bg-opacity-50 ">
                <div className="flex gap-1">
                    <div><img className="h-[200px] md:h-full"  src={desImage} alt="Shoes" /></div>
                    <div className="card-body my-auto">
                        <button style={{color:colorTitle,backgroundColor:colorBg}} className='font-medium text-sm p-1 text-center rounded-md w-20'>{title}</button>
                        <h2  className="card-title text-black font-semibold text-sm lg:text-xl md:text-xs ">{cardName} </h2>
                        <p style={{color:colorTitle}} className='font-semibold text-sm'>${price}</p>
                        
                        <button style={{backgroundColor:colorTitle}} className="btn md:w-40 w-28 text-xs md:text-xl md:font-semibold  font-medium text-white normal-case border-none ">View details</button>
                        
                     
                    </div>

                </div>
                    
                    
            </div>
        </div>
    );
};
DonationList.propTypes={
    list:PropTypes.object,
}
export default DonationList;