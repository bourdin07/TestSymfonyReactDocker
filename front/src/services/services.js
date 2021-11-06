import authentication from "./authentication/authentication";

export class services {
  constructor() {
    //// exemple:
    // this.nameService = new nameService();

    this.authentication = new authentication();
  }
}
