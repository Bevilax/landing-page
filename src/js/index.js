//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import CardsCards from "./component/cards.jsx";

//render your react application
class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Jumbotron />
				<CardsCards />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
