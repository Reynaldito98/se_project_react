const baseUrl = 'http://localhost:3001';
const headers = {
  "Content-type": "application/json",
}

const headersProtected = {
  "Content-type": "application/json",
  authorization: `Bearer ${localStorage.getItem('jwt')}`
}
 
const checkResponse = (res) => {
  if(res.ok){
    return res.json();
  } else{
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getClothingItems() {
    return fetch(`${baseUrl}/items`, {
              headers: headers})
          .then(checkResponse)
}

function postClothingItem(name, weather, imageUrl) {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: headersProtected,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl
    })
  })
    .then(checkResponse)
}

function deleteClothingItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: headersProtected
  })
    .then(checkResponse)
}

function editProfileInfo(name, avatar) {
  return  fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: headersProtected,
    body: JSON.stringify({
      name, avatar 
  })
  })
    .then(checkResponse)
}

function addCardLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: headersProtected
  })
    .then(checkResponse)
}

function deleteCardLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: headersProtected,
  })
    .then(checkResponse)
}

export {getClothingItems, postClothingItem, deleteClothingItem, editProfileInfo, addCardLike, deleteCardLike, checkResponse, baseUrl};