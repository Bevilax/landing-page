import React from "react";
import Photo1 from "../../img/Photo1.png";
import Photo2 from "../../img/Photo2.png";
import Photo3 from "../../img/Photo3.png";

const CardsCards = () => {
	return (
		<div className="card-group">
			<div className="card1 col-sm-12 col-md-6 col-lg-3">
				<img
					className="card-img-top"
					src={Photo1}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">The Sun!</h5>
					<p className="card-text">Sun is life!</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card2 col-sm-12 col-md-6 col-lg-3">
				<img
					className="card-img-top"
					src={Photo2}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">The Sun and The Shadow</h5>
					<p className="card-text">It brings happiness</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card3 col-sm-12 col-md-6 col-lg-3">
				<img
					className="card-img-top"
					src={Photo3}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">More Sun!</h5>
					<p className="card-text">So warm!</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardsCards;
