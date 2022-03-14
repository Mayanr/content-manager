import React from 'react';
import spinnerImg from '../../assets/loading.gif';

let Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img src={spinnerImg} alt="loading" className='d-block m-auto' style={{width: '100px'}}/>
            </div>  
        </React.Fragment>
    )
};

export default Spinner;