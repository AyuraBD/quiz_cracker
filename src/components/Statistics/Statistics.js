import React from 'react';
import Footer from '../Footer/Footer';
import './Statistics.css';
import { LineChart, CartesianGrid, Tooltip, Legend, Line, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
	const quizData = useLoaderData();
	const quiz = quizData.data;
		
	return (
		<div>
			<div className="statistics">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="statistics-header">
								<h3>Quiz topic Statistics.</h3>
							</div>
						</div>
						<div className="chart-container">
							<div className="row">
								<LineChart width={800} height={350} data={quiz}
									margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey='name' stroke="#8884d8" />
									<Line type="monotone" dataKey="total" stroke="#82ca9d" />
								</LineChart>			
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Statistics;