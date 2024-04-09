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

let student1 = new User("Pragun", "abc@gmail.com");
let student2 = new User("Prabhu", "dd@gmail.com");
