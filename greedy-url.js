function getURL(dataSet) {
    let check = /https?:\/\/\S+/gi
    return dataSet.match(check) ||  []
}


function greedyQuery(dataSet) {
  return getURL(dataSet).filter((url) => {
    const query = url.split('?')[1]
    if (!query) return false
    return (query.match(/=/g) || []).length >= 3
  })
}
function notSoGreedy(dataSet) {
  return getURL(dataSet).filter((url) => {
    const query = url.split('?')[1]
    if (!query) return false
    const count = (query.match(/=/g) || []).length
    return count >= 2 && count <= 3
  })
}