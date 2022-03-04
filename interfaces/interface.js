var UserAccount = /** @class */ (function () {
  function UserAccount(name, id) {
    this.name = name;
    this.id = id;
  }
  return UserAccount;
})();
var user = new UserAccount("Vivek", 3);
console.log(user);
