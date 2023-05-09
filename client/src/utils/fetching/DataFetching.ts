

const headerOptions = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    'Authorization': 'Bearer ' + process.env.API_KEY,
  }


export async function getDataFromUrl(url: string) {
    
    const res = await fetch(url, 
        {   
            method: 'GET',
            headers: headerOptions,
            next: {
                revalidate: 10, // In seconds
        }
    });

    const data = await res.json();
    return data;

}