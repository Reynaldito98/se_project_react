const baseUrl = 'http://localhost:3001/items';
const headers = {
  "Content-type": "application/json"
}

const checkResponse = (res) => {
  if(res.ok){
    return res.json();
  } else{
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getClothingItems() {
    return fetch(baseUrl)
            .then(checkResponse)
}

function postClothingItem(name, weather, imageUrl) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl
    })
  })
    .then(checkResponse)
}

function deleteClothingItem(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: headers
  })
    .then(checkResponse)
}

export {getClothingItems, postClothingItem, deleteClothingItem};