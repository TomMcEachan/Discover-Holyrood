const headerOptions = {
    "Content-Type": "application/json",
    accept: "application/json",
};

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

// Gets a specific article based on the slug passed in
export const getSpecificArticle = async (slug: string) => {
    const data = await getDataFromUrl(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?filters[link][$eq]=${slug}&populate=deep`,
    );

    const article = await data.data[0];
    return article;
};

// Gets all articles except the one with the slug passed in
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
