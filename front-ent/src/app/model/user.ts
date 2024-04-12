export class User {

  name: string;
  email: string;
  mobilePhone: string;
  gender:string;
  password:string
  acceptPolicy:boolean;


  constructor(name: string, email: string, mobilePhone: string, gender: string, password: string, acceptPolicy: boolean) {
    this.name = name;
    this.email = email;
    this.mobilePhone = mobilePhone;
    this.gender = gender;
    this.password = password;
    this.acceptPolicy = acceptPolicy;
  }
}
