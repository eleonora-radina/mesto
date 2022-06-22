export class Api {
  constructor(url, key) {
    this._url = url;
    this._key = key;
  }

  getUser() {
    return fetch(`https://${this._url}users/me`, {
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { 
      if(res.ok) {
        return res.json() 
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editUserInfo(data) {
    return fetch(`https://${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  editAvatar(data) {
    return fetch(`https://mesto.${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.link,
      })
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  
  getCards() {
    return fetch(`https://mesto.${this._url}cards` , {
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { 
      if(res.ok) {
        return res.json() 
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  addNewCard(data) {
    return fetch(`https://mesto.${this._url}cards`, {
      method: 'POST',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteCard(cardId) {
    return fetch(`https://mesto.${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      }
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  addLike(cardId) {
    return fetch(`https://mesto.${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      },
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteLike(cardId) {
    return fetch(`https://mesto.${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._key,
       'Content-Type': 'application/json'
      },
    })
    .then((res) => { 
        if(res.ok) {
          return res.json() 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })  
  }
}