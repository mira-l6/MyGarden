const request = async (method, url, data, options = {}) => {

    if(options.method.toLowerCase() !== 'get'){

        options.method = method;
    }

    if(data){
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(data)
        }
    }

    const response = await fetch(url, options);
    if(response.status == 204){
        return;
    }

    const result = await response.json();
    return result;
}

export const post = (url, data) => request('post', url, data);
export const get = (url) => request('get', url);
export const put = (url, data) => request('put', url, data);
export const remove = (url) => request('delete', url);
