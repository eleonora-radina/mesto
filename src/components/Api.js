export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  } 

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }
  
  getCards() {
    return fetch(`${this._url}/cards` , {
      headers: this._headers
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }
}