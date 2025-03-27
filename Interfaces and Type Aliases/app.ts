// interface
interface User {
  name: string;
  email: string;
  password: string;
  age?: number; // use make ? so this key is not required
}

function getData(user: User) {
  user.name = user.name;
  user.email = user.email;
  user.password = user.password;
}
getData({ name: "purv", email: "p@gmail.com", password: "1234" });
