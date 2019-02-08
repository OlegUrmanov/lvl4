function getUserProfileFromObj(object) {
  if (typeof(object) === "object" && object != null) {
    if ((typeof object['username'] !== "undefined") && (typeof object['email'] !== "undefined")) {
      return {
        username: object.username,
        email: object.email,
      };
    }
  }
  return false;
}

function _test() {


  console.log(getUserProfileFromObj({
    id: 1,
    username: 'Vasya',
    email: 'user@mail.ru'
  }));



  console.log(getUserProfileFromObj({
    uwsername: 'Vasya',
    email: 'user@mail.ru'
  }));


  console.log(getUserProfileFromObj({
    qw: 1,
    uwsername: 'Vasya',
    email: 'user@mail.ru'
  }));


}
