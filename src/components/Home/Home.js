import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
	const quizesData = useLoaderData();
	const quizes = quizesData.data;
	console.log(quizes);
	return (
		<div>
			<div className='home'>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="home-cnt">
								<h2> Welcome to our quiz page.</h2>
								<p>It helps in identifying the students with what they know and what they don't. It increases the level of practice, and concentration and increases the uplift of the memorizing level at its best.</p>
							</div>
						</div>
						<div className="quiz-container">
							<div className="row">
								{
									quizes.map(quiz => <Quiz
										key={quiz.id}
										quiz={quiz}
									></Quiz>)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;