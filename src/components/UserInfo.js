export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const item = {};
    item.name = this._name.textContent;
    item.about = this._about.textContent;
    item.avatar = this._avatar.src;
    return item;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._about.textContent = item.about;
    this._avatar.src = item.avatar;
  }
}