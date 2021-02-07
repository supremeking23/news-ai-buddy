import { makeStyles } from "@material-ui/core/styles";

// create a hook that soon will be used in the usestyle
export default makeStyles({
	media: {
		height: 250, // kahit hindi naka string
	},

	border: {
		border: "solid",
	},
	fullHeightCard: {
		height: "100%",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderBottom: "10px solid white",
	},
	activeCard: {
		borderBottom: "10px solid #22289a",
	},
	grid: {
		display: "flex",
	},
	details: {
		display: "flex",
		justifyContent: "space-between",
		margin: "20px",
	},
	title: {
		padding: "0 16px",
	},
	cardActions: {
		padding: "0 16px 8px 16px",
		display: "flex",
		justifyContent: "space-between",
	},
});

// named import
