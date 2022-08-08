const API_KEY = "NAZ2j0oRqT2oiNcGOoKus41CRry7usnE"
const URL_API = (category) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;

export const getGifs = async (category) => {
    const resp = await fetch(URL_API(category));
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
}