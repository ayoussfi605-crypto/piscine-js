async function getJSON(path, params) {
    let url = path;
    if (params) url += '?' + new URLSearchParams(params);

    const resp = await fetch(url);

    if (!resp.ok) throw new Error(resp.statusText)
    
    const jsn = await resp.json();

    if(jsn.error) throw new Error(jsn.error);
    
    return jsn.data;
}

