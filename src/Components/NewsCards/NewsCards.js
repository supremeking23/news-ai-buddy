import React from "react";

import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import Ripples from "react-ripples";

import useStyles from "./styles";

//47min

// rafe react arrow function with exports
// grid- responsive, mobile friendly
// typo - nice text
// Grow - animation
//spacing between the cards

const infoCards = [
	{ color: "#b71c1c", title: "Latest News", text: "Give me the latest news" },
	{
		color: "#880e4f",
		title: "News by Categories",
		info:
			"Business, Entertainment, General, Health, Science, Sports, Technology",
		text: "Give me the latest Technology news",
	},
	{
		color: "#4a148c",
		title: "News by Terms",
		info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
		text: "What's up with PlayStation 5",
	},
	{
		color: "#004d40",
		title: "News by Sources",
		info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
		text: "Give me the news from CNN",
	},
];

export default function NewsCards(props) {
	const classes = useStyles();
	const { articles, activeArticle } = props;

	if (!articles.length) {
		return (
			<Grow in>
				<Grid
					className={classes.container}
					container
					alignItems="stretch"
					spacing={3}>
					{infoCards.map((infoCard) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className={classes.infoCard}>
							<Ripples during={2200}>
								<div
									className={classes.card}
									style={{ backgroundColor: infoCard.color }}>
									<Typography variant="h5" component="h5">
										{infoCard.title}
									</Typography>
									{infoCard.info ? (
										<Typography variant="h6" component="h6">
											<strong>{infoCard.title.split(" ")[2]}</strong>: <br />
											{infoCard.info}
										</Typography>
									) : null}
									<Typography variant="h6" component="h6">
										Try saying: <br /> <i>{infoCard.text}</i>
									</Typography>
								</div>
							</Ripples>
						</Grid>
					))}
				</Grid>
			</Grow>
		);
	}
	return (
		<Grow in>
			<Grid
				container
				className={classes.container}
				alignItems="stretch"
				spacing={3}>
				{articles.map((article, index) => (
					<Grid
						key={index}
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						style={{ display: "flex" }}>
						<NewsCard
							article={article}
							activeArticle={activeArticle}
							i={index}
						/>
					</Grid>
				))}
			</Grid>
			{/* instant return */}
		</Grow>
	);
}
