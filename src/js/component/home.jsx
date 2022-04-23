import React from "react";

const Home = () => {
	return (
		<div className="NavigationBar">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					ReactionaryReact
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								dddd
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>,
		<div className="jumbotron">
		<h1 className="display-4">Hello, world!</h1>
		<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		<hr className="my-4"></hr>
		<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
		<p className="lead">
			<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
		</p>
</div>
	);
};

// const Jumbotron = () => {
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">Hello, world!</h1>
// 			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
// 			<hr className="my-4"></hr>
// 			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
// 			<p className="lead">
// 				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
// 			</p>
// </div>
// 	);
// };

export default Home;
