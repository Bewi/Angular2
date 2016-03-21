import { Person } from "./person";

export class PeopleService {
  private people : Person [];

  constructor() {
    this.people =  [
      { id:7, firstName: "Anne", lastName: "Honymous" },
      { id:8, firstName: "Jean", lastName: "Bon" },
      { id:9, firstName: "Mike", lastName: "Honymous" },
    ];
  }

  public getAll() {
    return this.people;
  }
}
