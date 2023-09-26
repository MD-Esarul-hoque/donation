import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const{id,image,title,cardName,colorTitle,colorTitleBg,colorBg}=card;
    return (
        <div>
           <a> <Link to={`/home/${id}`}>
                <div style={{backgroundColor:colorTitleBg}} className="card card-compact  shadow-xl bg-opacity-50 ">
                    <figure><img  src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                    <button style={{color:colorTitle,backgroundColor:colorBg}} className='font-medium text-sm p-1 text-center rounded-md w-20'>{title}</button>
                    <h2 style={{color:colorTitle}} className="card-title  font-semibold text-lg">{cardName} </h2>
                        
                        
                    </div>
                </div>
                </Link></a>
        </div>
    );
};
Card.propTypes={
    card:PropTypes.object,
}
export default Card;