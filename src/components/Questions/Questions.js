import React from 'react';

const Questions = ({ questions }) => {

	console.log(questions);
	const { question, } = questions;

	return (
			<div className="singleQuiz">
				<div className="question-header">
					<div className="question">
						<p>{question}</p>
					</div>
					<div className="icon">
						<h3>Icon</h3>
					</div>
				</div>
			</div>
			
	);
};

export default Questions;