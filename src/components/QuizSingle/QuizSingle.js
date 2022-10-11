import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QuizSingle.css';

const QuizSingle = () => {
	const quizDataSingle = useLoaderData();
	const quizSingle = quizDataSingle.data;
	console.log(quizSingle);
	const { name, id, logo, questions } = quizSingle;
	return (
		<div>
			<div className='quzeSingle'>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="quiz-left">
								<div className="quiz-header">
									<h3>Quiz of {name}</h3>
								</div>
								<div className="topic-img">
									<img className='img-fluid' src={logo} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-8">							
								{
									questions.map(questions => <Questions
										key={questions.id}
										questions={questions}
									></Questions>)
								}									
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizSingle;