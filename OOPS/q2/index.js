class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Name", this.name);
    console.log("Email", this.email);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    this.name = "RAJ";
  }
}

let admin = new Admin("Pragun", "abc@gmail.com");
console.log(admin);
admin.editData();
console.log(admin);
