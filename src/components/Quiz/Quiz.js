import React from 'react';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className='col-sm-3'>
            <div className="quiz-single">
                <img className='img-fluid' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Quiz;