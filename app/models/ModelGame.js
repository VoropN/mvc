export class ModelGame {
  constructor(contr) {
    this.controller = contr;
    this.api = 'https://randomuser.me/api/';
    this.user = {
      info: {
        errors: 0,
        male: 0,
        female: 0,
        errorsArr: [],
        rightArr: [],
      },
      gender: null,
      picture: null
    }
  }

  getDataUser() {
    fetch(this.api).then(data => data.json()).then(dataUser => {
      this.user.gender = dataUser.results[0].gender;
      this.user.picture = dataUser.results[0].picture.large;
      this.controller.getUser(this.user);
    });
  }

  isRightUser(gender) {
    if (gender === this.user.gender) {
      this.user.info[gender]++;
      this.user.info.rightArr.push(this.user.picture);
    } else {
      this.user.info.errors++;
      this.user.info.errorsArr.push(this.user.picture);
    }
  }

}