const key = "4740308a03e949d280f53b3c4da9da17";
export const getNews = async (search, num, language) => {
	const url = `https://newsapi.org/v2/everything?q=${search}&language=${language}&pageSize=${num}&apiKey=${key}`;
	const newsResponse = await fetch(url);
	const newsData = await newsResponse.json();
	return newsData;
};

export const getNewsHeadlines = async (num, country) => {
	const key = "4740308a03e949d280f53b3c4da9da17";
	const url = `http://newsapi.org/v2/top-headlines?country=${country}&pageSize=${num}&apiKey=${key}`;
	const newsResponse = await fetch(url);
	const newsData = await newsResponse.json();
	return newsData;
};
