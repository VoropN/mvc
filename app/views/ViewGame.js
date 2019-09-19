export class ViewGame {
  constructor(control) {
    this.controller = control;
    this.dom = dom;
    this.dom.addEventListener('click', this.controller.chooseGender.bind(this.controller))
  }

  render(info) {
    this.dom.innerHTML = `
    <div class="error_pic">
    <h3>Error: ${info.info.errorsArr.length}</h3>
    ${info.info.errorsArr.map(e => `<img src="${e}" alt="userpic">`).join('')}
    </div>
    <div class="conters">
      <h2>M: </h2>
      <div class="conuterM">${info.info.male}</div>
    </div>
    <div class="userinfo">
      <h3>Error: <span class="err_info">${info.info.errors}</span></h3>
      <div class="userpic"><img src="${info.picture}" alt="userpic"></div>
      <div class="buttons">
        <button class="btns btnM">M</button>
        <button class="btns btnF">F</button>
      </div>
    </div>
    <div class="conters">
      <h2>F: </h2>
      <div class="conuterF">${info.info.female}</div>
    </div>
    <div class="right_pic"><h3>Right: ${info.info.rightArr.length}</h3>
    ${info.info.rightArr.map(e => `<img src="${e}" alt="userpic">`).join('')}
    </div>
    `;
  }
}