import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className='col-lg-3 col-md-6'>
            <div className="quiz-single">
                <img className='img-fluid' src={logo} alt="" />
                <div className="quiz-name">
                    <div className="quiz-cnt">
                        <h4>{name}</h4>
                        <p>Quiz: {total}</p>
                    </div>
                    <button className="quiz-btn"><Link to={`quiz/${id}`}>Start practicing</Link></button>
                </div>
            </div>
        </div>
    )
};

export default Quiz;