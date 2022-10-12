import React from 'react';
import Footer from '../Footer/Footer';
import './Statistics.css';

const Statistics = () => {
	return (
		<div>
			<div className="statistics">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="statistics-header">
								<h3>Quiz Statistics.</h3>
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