import Pchart from "../PChart/Pchart";
import PropTypes from 'prop-types';

const Plist = ({pList}) => {
    console.log(pList);
    return (
        <div>
            {
                pList.map(priceCh=><Pchart key={priceCh.id} priceCh={priceCh}></Pchart>)
            }
        </div>
    );
};
Plist.propTypes={
    pList:PropTypes.object,
}
export default Plist;