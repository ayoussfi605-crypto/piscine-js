
function queryServers(serverName, q){
    let url1 = `/${serverName}?q=${q}`
    let url2 = `/${serverName}_backup?q=${q}`

    return Promise.race([getJSON(url1),getJSON(url2)]);
    
}

function gougleSearch(q) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  const searchPromise = Promise.all([
    queryServers('web', q),
    queryServers('image', q),
    queryServers('video', q),
  ]).then(([web, image, video]) => ({
    web,
    image,
    video,
  }));

  return Promise.race([timeoutPromise, searchPromise]);
}
