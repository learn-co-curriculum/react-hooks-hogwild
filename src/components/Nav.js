import piggy from "../assets/porco.png";
import AddHogModal from "./AddHogModal";

const Nav = ({ addHog }) => {
	return (
		<div>
			<div className="navWrapper">
				<span className="headerText">HogWild</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">
					A React App for County Fair Hog Fans
				</span>
				<AddHogModal addHog={addHog} />
			</div>
		</div>

	);
};

export default Nav;
