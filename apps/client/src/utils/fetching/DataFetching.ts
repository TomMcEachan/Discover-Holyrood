const headerOptions = {
    "Content-Type": "application/json",
    accept: "application/json",
};

/* Generic Fetching */
export async function getDataFromUrl(url: string) {
    const res = await fetch(url, {
        method: "GET",
        headers: headerOptions,
        next: {
            revalidate: 60, // In seconds
        },
    });

    const data = await res.json();
    return data;
}

/* Articles Fetching */
export const getSpecificArticle = async (slug: string) => {
    const data = await getDataFromUrl(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?filters[link][$eq]=${slug}&populate=deep`,
    );

    const article = await data.data[0];
    return article;
};

export const getSuggestedArticles = async (slug: string) => {
    const data = await getDataFromUrl(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?populate=deep&filters[link][$ne]=${slug}`,
    );

    const articles = await data.data;
    return articles;
};

export const getAllArticles = async () => {
    const data = await getDataFromUrl(
        "https://discover-holyrood-cms.azurewebsites.net/api/articles?populate=deep",
    );

    const articles = await data.data;
    return articles;
};

/* AR Scene Fetching */
export const getAllARScenes = async () => {
    const data = await getDataFromUrl(
        "https://discover-holyrood-cms.azurewebsites.net/api/ars?populate=deep",
    );

    const scenes = await data.data;
    return scenes;
};

export const getSpecificARScenes = async (slug: string) => {
    const data = await getDataFromUrl(
        `https://discover-holyrood-cms.azurewebsites.net/api/ars?filters[appLink][$eq]=${slug}&populate=deep`,
    );

    const scene = await data.data[0];
    return scene;
};

export const getSuggestedARScenes = async (slug: string) => {
    const data = await getDataFromUrl(
        `https://discover-holyrood-cms.azurewebsites.net/api/ars?populate=deep&filters[appLink][$ne]=${slug}`,
    );

    const scenes = await data.data;
    return scenes;
};

// Fetching All

export const getAllData = async () => {
    const articles = await getAllArticles();
    const scenes = await getAllARScenes();

    return { articles, scenes };
};

// Fetching Specific
export const getSpecificData = async (slug: string) => {
    const article = await getSpecificArticle(slug);
    const scene = await getSpecificARScenes(slug);

    return { article, scene };
};

// Fetching Suggested
export const getSuggestedData = async (slug: string) => {
    const articles = await getSuggestedArticles(slug);
    const scenes = await getSuggestedARScenes(slug);

    return { articles, scenes };
};
