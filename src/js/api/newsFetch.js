export const getNews = async (search, num, language) => {
  const key = "6eff9ed09ee54486b564c773b6db91b3";
  const url = `https://newsapi.org/v2/everything?q=${search}&language=${language}&pageSize=${num}&apiKey=${key}`;
  const newsResponse = await fetch(url);
  const newsData = await newsResponse.json();
  return newsData;
};
