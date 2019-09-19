import { ModelGame } from '../models/ModelGame.js';
import { ViewGame } from '../views/ViewGame.js';
export class ControllerGame {
  constructor() {
    this.model = new ModelGame(this);
    this.view = new ViewGame(this);
    this.actionGetUser();
  }

  actionGetUser() {
    this.model.getDataUser();
  }
  
  getUser(user) {
    this.view.render(user)
  }

  chooseGender(event) {
    if (event.target.closest('.btns')) {
      event.target.setAttribute("disabled", true);
      this.model.isRightUser(event.target.classList.contains('btnM') ? 'male' : 'female');
      this.actionGetUser();
    }
  }
}