import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import "./App.css";

import wordsToNumbers from "words-to-numbers";

import NewsCards from "./Components/NewsCards/NewsCards";

//Mine
// const SDK_KEY =
// 	"78c689be37c239685b5bb8d30b88aba32e956eca572e1d8b807a3e2338fdd0dc/stage";
// Testing;
const SDK_KEY =
	"64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage";

// https://gist.github.com/adrianhajdin/bab49eac7dcf9c095fce37ae1167dd87

// 39:50mins
// :1:25

function App() {
	const [newsArticle, setNewsArticle] = useState([]);

	const [activeArticle, setActiveArticle] = useState(-1);

	useEffect(() => {
		alanBtn({
			key: SDK_KEY,
			onCommand: ({ command, articles, number }) => {
				if (command === `newHeadlines`) {
					setNewsArticle(articles);
					setActiveArticle(-1);
				} else if (command === `highlight`) {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
					// 1:31 recoomended by react
				} else if (command === `open`) {
					const parsedNumber =
						number.length > 2
							? wordsToNumbers(number, { fuzzy: true })
							: number;

					const article = articles[parsedNumber - 1];

					if (parsedNumber > 20) {
						alanBtn.playText("Please try that again");
					} else if (article) {
						window.open(article.url);
						alanBtn().playText(`Opening article ${parsedNumber}`);
					}
				}
			},
		});
	}, []);

	return (
		<>
			<div>
				<h1>Global News Reporter AI</h1>
				<p>Your news AI buddy...</p>
				<NewsCards articles={newsArticle} activeArticle={activeArticle} />
			</div>
		</>
	);
}

export default App;
