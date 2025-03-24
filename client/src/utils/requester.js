const request = async (method, url, data, options = {}) => {

    if(options.method !== 'get'){

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

export default {
    get: request.bind(null, 'get'),
    post: request.bind(null, 'post'),
    put: request.bind(null, 'put'),
    delete: request.bind(null, 'delete'),
    baseRequest: request
}