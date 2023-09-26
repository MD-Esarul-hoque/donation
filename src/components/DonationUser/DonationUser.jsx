
import PropTypes from 'prop-types';
import DonationList from '../DonationList/DonationList';




const DonationUser = ({du}) => {
    
   
    
    return (
        <>
            <div>
            {
                du.map(list=><DonationList key={list.id} list={list}></DonationList>)
            }


            </div>
            
            
            
            
        </>
    );
};
DonationUser.propTypes={
    du:PropTypes.object,
}
export default DonationUser;