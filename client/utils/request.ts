
export async function request<TResponse>(
    url: string,
    // `RequestInit` is a type for configuring 
    // a `fetch` request. By default, an empty object.
    config: RequestInit = {}

    // This function is async, it will return a Promise:
): Promise<TResponse> {

    // Inside, we call the `fetch` function with 
    // a URL and config given:
    const response = await fetch(url, config);
    const data = await response.json();
    return data as TResponse;

    // We also can use some post-response
    // data-transformations in the last `then` clause.
}