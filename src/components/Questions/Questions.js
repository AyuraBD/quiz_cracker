import React from 'react';
import './Questions.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ questions }) => {

	console.log(questions);
	const { question, options, correctAnswer } = questions;

	const notify = () => toast(`${correctAnswer}`);

	// const showCorrectAnswer = () =>{
		
	// 	if(options === correctAnswer){
	// 		alert(`The answer is true.`)
	// 	} else{
	// 		alert('Answer is wrong');
	// 	}
	// }

	return (
			<div className="singleQuiz">
				<div className="question-header">
					<div className="question">
					<ToastContainer />
						<p>{question}</p>
					</div>
					<div className="icon">
						<button onClick={notify}><EyeIcon className="h-6 w-6 text-blue-500"/></button>
					</div>
				</div>
				<div className="quiz-options">
					<div className="row">
						<div className="col-md-6">
							<div className="answer-option one">
								<input type="radio" id={options[0]} name={question}/>
								<label for={options[0]}>{options[0]}</label>								
							</div>
						</div>
						<div className="col-md-6">
							<div className="answer-option two">
								<input type="radio" id={options[1]} name={question}/>
								<label for={options[1]}>{options[1]}</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="answer-option three">
								<input type="radio" id={options[2]} name={question}/>
								<label for={options[2]}>{options[2]}</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="answer-option four">
								<input type="radio" id={options[3]} name={question}/>
								<label for={options[3]}>{options[3]}</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			
	);
};

export default Questions;