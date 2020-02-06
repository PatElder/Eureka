export const getNews = async (search, num, country) => {
  const key = "6eff9ed09ee54486b564c773b6db91b3";
  const url = `https://newsapi.org/v2/top-headlines?q=${search}&country=${country}&pageSize${num}&apiKey=${key}`;
  const newsResponse = fetch(url);
  const data = (await newsResponse).json();
  return data;
};
