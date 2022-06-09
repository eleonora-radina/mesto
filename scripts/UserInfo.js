export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const item = {};
    item.name = this._name.textContent;
    item.about = this._about.textContent;
    return item;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._about.textContent = item.about;
  }
}