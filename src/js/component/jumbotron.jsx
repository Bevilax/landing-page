import React from "react";

const Jumbotron = () => {
	return (
		<div className="JumboBambo">
			<div className="jumbotron bg-secondary">
				<div className="JumboText">
					<h1 className="display-4">Hello, life!</h1>
					<p className="lead">
						This landing page was created with React.js :)
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Slay!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
